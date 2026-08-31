import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Users } from "lucide-react";
import {
  friends as seedFriends,
  requests as seedRequests,
  FRUITS,
} from "../components/gifts/data/index.js";
import {
  TOKENS,
  Avatar,
  Eyebrow,
  GiftsBackground,
  Stamp,
} from "../components/gifts/ui";
import BentoGrid from "../components/gifts/BentoGrid";

/**
 * GiftsPage — "The Grove"
 * ---------------------------------------------------------
 * Social + gifting hub for the fruit-market app.
 *
 * data/index.js                 -> friend/family + gift-history data
 * components/gifts/ui.jsx       -> shared tokens + primitives
 * components/gifts/BentoGrid.jsx -> bento grid of cards
 * GiftsPage.jsx                 -> state, derived data, header, modal, toast
 *
 * Requires: tailwindcss, framer-motion, lucide-react
 */

function fruitMeta(fruitName) {
  return (
    FRUITS.find((f) => f.name === fruitName) || {
      emoji: "🍃",
      color: TOKENS.leaf,
    }
  );
}

// Attach computed fields (last gift, sent/received counts) to a friend record.
function withDerived(friend) {
  const sorted = [...friend.gifts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const last = sorted[0];

  const sentCount = friend.gifts.filter(
    (g) => g.direction === "sent"
  ).length;

  const receivedCount = friend.gifts.filter(
    (g) => g.direction === "received"
  ).length;

  return {
    ...friend,
    lastGift: last ? { ...last, ...fruitMeta(last.fruit) } : null,
    sentCount,
    receivedCount,
    streak: friend.gifts.length,
  };
}

export default function GiftsPage({ onNavigateToFruits = () => {} }) {
  // Local, mutable copies seeded from data/index.js so gifting/accepting
  // requests updates the UI without touching the imported module.
  const [friends, setFriends] = useState(() =>
    seedFriends.map((f) => ({
      ...f,
      gifts: [...f.gifts],
    }))
  );

  const [requests, setRequests] = useState(seedRequests);
  const [query, setQuery] = useState("");
  const [relationFilter, setRelationFilter] = useState("all");
  const [pickerFriend, setPickerFriend] = useState(null);
  const [stampEvent, setStampEvent] = useState(null);

  const derivedFriends = useMemo(
    () => friends.map(withDerived),
    [friends]
  );

  const totals = useMemo(
    () =>
      derivedFriends.reduce(
        (acc, f) => ({
          given: acc.given + f.sentCount,
          received: acc.received + f.receivedCount,
        }),
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

    return flat
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 8);
  }, [derivedFriends]);

  const filteredFriends = derivedFriends.filter((f) => {
    const matchesQuery = f.name
      .toLowerCase()
      .includes(query.toLowerCase());

    const matchesRelation =
      relationFilter === "all" ||
      f.relation === relationFilter;

    return matchesQuery && matchesRelation;
  });

  function respondToRequest(id, accepted) {
    const req = requests.find((r) => r.id === id);

    setRequests((prev) =>
      prev.filter((r) => r.id !== id)
    );

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

    setStampEvent({
      friendName: friend.name,
      fruit: fruit.emoji,
      color: fruit.color,
    });

    setFriends((prev) =>
      prev.map((f) =>
        f.id === friend.id
          ? {
              ...f,
              gifts: [
                {
                  id: `g-${Date.now()}`,
                  fruit: fruit.name,
                  direction: "sent",
                  date: new Date().toISOString(),
                },
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
      className="relative min-h-screen w-full overflow-hidden px-4 py-8 sm:px-8 lg:px-12"
      style={{
        // background: TOKENS.bg,
        // color: TOKENS.ink,
        color: TOKENS.ink,
        isolation: "isolate",
      }}
    >
      <GiftsBackground />

      <div style={{ position: "relative", zIndex: 1 }}>
        <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>
              OrangeU · Friends &amp; Family
            </Eyebrow>

            <h1
              className="mt-1 text-4xl sm:text-5xl"
              style={{ fontWeight: 600 }}
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
              style={{
                background: TOKENS.card,
                borderColor: TOKENS.cardLine,
              }}
            />
          </div>
        </header>

        <div className="mb-6 flex gap-2">
          {["all", "friend", "family"].map((r) => (
            <button
              key={r}
              onClick={() => setRelationFilter(r)}
              className="rounded-full px-3.5 py-1.5 text-xs capitalize"
              style={{
                background:
                  relationFilter === r
                    ? TOKENS.ink
                    : TOKENS.card,
                color:
                  relationFilter === r
                    ? TOKENS.card
                    : TOKENS.ink,
                border: `1px solid ${TOKENS.cardLine}`,
              }}
            >
              {r === "all" ? "Everyone" : `${r}s`}
            </button>
          ))}
        </div>

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
          onNavigateToFruits={onNavigateToFruits}
        />

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
                initial={{
                  y: 40,
                  opacity: 0,
                  scale: 0.97,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  y: 20,
                  opacity: 0,
                  scale: 0.97,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 26,
                }}
                className="w-full max-w-sm rounded-[24px] p-6"
                style={{
                  background: TOKENS.card,
                  border: `1px solid ${TOKENS.cardLine}`,
                }}
              >
                <Eyebrow>Sending to</Eyebrow>

                <div className="mt-2 flex items-center gap-2">
                  <Avatar
                    initials={pickerFriend.initials}
                    size={32}
                  />

                  <p
                    className="text-lg"
                    style={{ fontWeight: 600 }}
                  >
                    {pickerFriend.name}
                  </p>
                </div>

                <p className="mt-4 text-xs uppercase tracking-widest opacity-60">
                  Pick a fruit
                </p>

                <div className="mt-3 grid grid-cols-3 gap-3">
                  {FRUITS.map((fruit) => (
                    <button
                      key={fruit.name}
                      onClick={() => sendFruit(pickerFriend, fruit)}
                      className="flex flex-col items-center gap-1 rounded-2xl py-3 transition-transform hover:scale-105"
                      style={{
                        background: `${fruit.color}1A`,
                      }}
                    >
                      <Stamp
                        emoji={fruit.emoji}
                        color={fruit.color}
                        size={44}
                      />

                      <span className="text-[11px]">
                        {fruit.name}
                      </span>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setPickerFriend(null)}
                  className="mt-5 w-full rounded-full border py-2 text-sm"
                  style={{
                    borderColor: TOKENS.cardLine,
                  }}
                >
                  Cancel
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {stampEvent && (
            <motion.div
              className="pointer-events-none fixed inset-x-0 top-10 z-50 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{
                  scale: 0.4,
                  rotate: -18,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  rotate: -8,
                  opacity: 1,
                }}
                exit={{
                  scale: 0.7,
                  opacity: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 340,
                  damping: 18,
                }}
                className="flex items-center gap-3 rounded-2xl px-5 py-3"
                style={{
                  background: TOKENS.ink,
                  color: TOKENS.card,
                }}
              >
                <Stamp
                  emoji={stampEvent.fruit}
                  color={stampEvent.color}
                  size={38}
                />

                <p className="text-sm">
                  Stamped &amp; sent to{" "}
                  <span className="font-semibold">
                    {stampEvent.friendName}
                  </span>
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="mt-10 flex items-center gap-2 text-xs opacity-50">
          <Users size={12} />

          {friends.length} people in your grove ·{" "}
          {requests.length} pending requests
        </footer>
      </div>
    </div>
  );
}