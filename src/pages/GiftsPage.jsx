// import React from 'react';
// import { useAuth } from '../context/AuthContext';
// import { Navigate } from 'react-router-dom';

// const Friends = () => {
//   const { isLoggedIn } = useAuth();

//   // Redirect to signin if not logged in
//   if (!isLoggedIn) {
//     return <Navigate to="/signin" />;
//   }

//   const friends = [
//     { id: 1, name: 'Alice', hobby: 'Reading' },
//     { id: 2, name: 'Bob', hobby: 'Gaming' },
//     { id: 3, name: 'Charlie', hobby: 'Coding' },
//     { id: 4, name: 'Diana', hobby: 'Traveling' },
//     { id: 5, name: 'Eve', hobby: 'Painting' },
//     { id: 6, name: 'Frank', hobby: 'Music' },
//   ];

//   return (
//     <div className="flex-1 px-4 py-8">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-5xl font-bold text-gray-900 mb-8">My Friends</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {friends.map((friend) => (
//             <div key={friend.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
//               <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full mb-4"></div>
//               <h2 className="text-xl font-semibold text-gray-900 mb-2">{friend.name}</h2>
//               <p className="text-gray-600">Hobby: {friend.hobby}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Friends;

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Users } from "lucide-react";
// import { friends as seedFriends, requests as seedRequests, FRUITS } from "../gifts/data.index.js";
import { friends as seedFriends, requests as seedRequests, FRUITS } from "../components/gifts/data/index.js";
// import { TOKENS, Avatar, Eyebrow, Stamp } from "/components/gifts/ui";
import { TOKENS, Avatar, Eyebrow, Stamp } from "../components/gifts/ui";
// import BentoGrid from "./components/gifts/BentoGrid";
import BentoGrid from "../components/gifts/BentoGrid";

/**
 * GiftsPage — "The Grove"
 * ---------------------------------------------------------
 * Social + gifting hub for the fruit-market app.
 *
 *   data/index.js            -> friend/family + gift-history data
 *   components/ui.jsx        -> shared tokens + primitives (Avatar, Card, Stamp...)
 *   components/gifts/BentoGrid.jsx -> the bento grid of cards (pure presentation)
 *   GiftsPage.jsx (here)   -> state, derived data, header, modal, stamp toast
 *
 * Requires: tailwindcss, framer-motion, lucide-react
 */

function fruitMeta(fruitName) {
  return FRUITS.find((f) => f.name === fruitName) || { emoji: "🍃", color: TOKENS.leaf };
}

// Attach computed fields (last gift, sent/received counts) to a friend record.
function withDerived(friend) {
  const sorted = [...friend.gifts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const last = sorted[0];
  const sentCount = friend.gifts.filter((g) => g.direction === "sent").length;
  const receivedCount = friend.gifts.filter((g) => g.direction === "received").length;
  return {
    ...friend,
    lastGift: last ? { ...last, ...fruitMeta(last.fruit) } : null,
    sentCount,
    receivedCount,
    streak: friend.gifts.length,
  };
}

export default function GiftsPage() {
  // Local, mutable copies seeded from data/index.js so gifting/accepting
  // requests updates the UI without touching the imported module.
  const [friends, setFriends] = useState(() =>
    seedFriends.map((f) => ({ ...f, gifts: [...f.gifts] }))
  );
  const [requests, setRequests] = useState(seedRequests);
  const [query, setQuery] = useState("");
  const [relationFilter, setRelationFilter] = useState("all"); // "all" | "friend" | "family"
  const [pickerFriend, setPickerFriend] = useState(null);
  const [stampEvent, setStampEvent] = useState(null);

  const derivedFriends = useMemo(() => friends.map(withDerived), [friends]);

  const totals = useMemo(
    () =>
      derivedFriends.reduce(
        (acc, f) => ({ given: acc.given + f.sentCount, received: acc.received + f.receivedCount }),
        { given: 0, received: 0 }
      ),
    [derivedFriends]
  );

  // Leaderboard: who has gifted the current user the most.
  const leaderboard = useMemo(
    () =>
      [...derivedFriends]
        .filter((f) => f.receivedCount > 0)
        .sort((a, b) => b.receivedCount - a.receivedCount)
        .slice(0, 3),
    [derivedFriends]
  );

  // Activity feed: every gift across every friend, newest first.
  const activity = useMemo(() => {
    const flat = derivedFriends.flatMap((f) =>
      f.gifts.map((g) => ({
        id: g.id,
        friendName: f.name,
        fruit: g.fruit,
        direction: g.direction,
        date: g.date,
        ...fruitMeta(g.fruit),
      }))
    );
    return flat.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 8);
  }, [derivedFriends]);

  const filteredFriends = derivedFriends.filter((f) => {
    const matchesQuery = f.name.toLowerCase().includes(query.toLowerCase());
    const matchesRelation = relationFilter === "all" || f.relation === relationFilter;
    return matchesQuery && matchesRelation;
  });

  function respondToRequest(id, accepted) {
    const req = requests.find((r) => r.id === id);
    setRequests((prev) => prev.filter((r) => r.id !== id));
    if (accepted && req) {
      setFriends((prev) => [
        {
          id: req.id,
          name: req.name,
          initials: req.initials,
          relation: "friend",
          status: "online",
          mutuals: req.mutuals,
          gifts: [],
        },
        ...prev,
      ]);
    }
  }

  function sendFruit(friend, fruit) {
    setPickerFriend(null);
    setStampEvent({ friendName: friend.name, fruit: fruit.emoji, color: fruit.color });
    setFriends((prev) =>
      prev.map((f) =>
        f.id === friend.id
          ? {
              ...f,
              gifts: [
                { id: `g-${Date.now()}`, fruit: fruit.name, direction: "sent", date: new Date().toISOString() },
                ...f.gifts,
              ],
            }
          : f
      )
    );
    window.setTimeout(() => setStampEvent(null), 1600);
  }

  return (
    <div
      className="min-h-screen w-full px-4 py-8 sm:px-8 lg:px-12"
      style={{ background: TOKENS.bg, color: TOKENS.ink }}
    >
      {/* <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style> */}

      {/* Header */}
      <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Eyebrow>The Grove · Friends &amp; Family</Eyebrow>
          <h1
            className="mt-1 text-4xl sm:text-5xl"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
          >
            Orange u feeling gifting?
          </h1>
        </div>
        <div className="relative w-full sm:w-72">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 opacity-60"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find a friend or family member…"
            className="w-full rounded-full border py-2.5 pl-9 pr-4 text-sm outline-none focus:ring-2"
            style={{ background: TOKENS.card, borderColor: TOKENS.cardLine, fontFamily: "'Inter', sans-serif" }}
          />
        </div>
      </header>

      {/* Relation filter */}
      <div className="mb-6 flex gap-2">
        {["all", "friend", "family"].map((r) => (
          <button
            key={r}
            onClick={() => setRelationFilter(r)}
            className="rounded-full px-3.5 py-1.5 text-xs capitalize"
            style={{
              fontFamily: "'Inter', sans-serif",
              background: relationFilter === r ? TOKENS.ink : TOKENS.card,
              color: relationFilter === r ? TOKENS.card : TOKENS.ink,
              border: `1px solid ${TOKENS.cardLine}`,
            }}
          >
            {r === "all" ? "Everyone" : `${r}s`}
          </button>
        ))}
      </div>

      {/* Bento grid — all card layout lives in components/gifts/BentoGrid.jsx */}
      <BentoGrid
        totals={totals}
        derivedFriends={derivedFriends}
        filteredFriends={filteredFriends}
        leaderboard={leaderboard}
        requests={requests}
        activity={activity}
        query={query}
        onRespondToRequest={respondToRequest}
        onOpenPicker={setPickerFriend}
      />

      {/* Fruit picker modal */}
      <AnimatePresence>
        {pickerFriend && (
          <motion.div
            className="fixed inset-0 z-40 flex items-end justify-center bg-black/30 p-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPickerFriend(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 40, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="w-full max-w-sm rounded-[24px] p-6"
              style={{ background: TOKENS.card, border: `1px solid ${TOKENS.cardLine}` }}
            >
              <Eyebrow>Sending to</Eyebrow>
              <div className="mt-2 flex items-center gap-2">
                <Avatar initials={pickerFriend.initials} size={32} />
                <p className="text-lg" style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}>
                  {pickerFriend.name}
                </p>
              </div>

              <p className="mt-4 text-xs uppercase tracking-widest opacity-60" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Pick a fruit
              </p>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {FRUITS.map((fruit) => (
                  <button
                    key={fruit.name}
                    onClick={() => sendFruit(pickerFriend, fruit)}
                    className="flex flex-col items-center gap-1 rounded-2xl py-3 transition-transform hover:scale-105"
                    style={{ background: `${fruit.color}1A` }}
                  >
                    <Stamp emoji={fruit.emoji} color={fruit.color} size={44} />
                    <span className="text-[11px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {fruit.name}
                    </span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setPickerFriend(null)}
                className="mt-5 w-full rounded-full border py-2 text-sm"
                style={{ borderColor: TOKENS.cardLine, fontFamily: "'Inter', sans-serif" }}
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stamp confirmation toast */}
      <AnimatePresence>
        {stampEvent && (
          <motion.div
            className="pointer-events-none fixed inset-x-0 top-10 z-50 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.4, rotate: -18, opacity: 0 }}
              animate={{ scale: 1, rotate: -8, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 340, damping: 18 }}
              className="flex items-center gap-3 rounded-2xl px-5 py-3"
              style={{ background: TOKENS.ink, color: TOKENS.card }}
            >
              <Stamp emoji={stampEvent.fruit} color={stampEvent.color} size={38} />
              <p className="text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                Stamped &amp; sent to <span className="font-semibold">{stampEvent.friendName}</span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="mt-10 flex items-center gap-2 text-xs opacity-50" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        <Users size={12} />
        {friends.length} people in your grove · {requests.length} pending requests
      </footer>
    </div>
  );
}