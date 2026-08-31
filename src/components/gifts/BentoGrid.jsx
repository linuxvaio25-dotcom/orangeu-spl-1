import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserPlus, Check, X, Send, Sprout, Clock, Mail } from "lucide-react";
// import { FRUITS } from "./gifts/data/index.js";
import { FRUITS } from "./data/index.js";
// import { TOKENS, Avatar, Eyebrow, RelationTag, Card, Stamp } from "./gifts/ui";
import { TOKENS, Avatar, Eyebrow, RelationTag, Card, Stamp } from "./ui";

/**
 * components/BentoGrid.jsx
 * ---------------------------------------------------------
 * Pure presentation: renders the bento grid of cards (orchard
 * stats, requests, leaderboard, invite tile, friend/family
 * cards, activity feed, note tile). All data is derived by
 * GiftsPage.jsx and passed in as props — this file owns no
 * state besides the animations already in view.
 */

function timeAgo(dateString) {
  const diffMs = Date.now() - new Date(dateString).getTime();
  const min = Math.floor(diffMs / 60000);
  if (min < 1) return "just now";
  if (min < 60) return `${min}m ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}h ago`;
  const day = Math.floor(hr / 24);
  if (day < 7) return `${day}d ago`;
  return `${Math.floor(day / 7)}w ago`;
}

export default function BentoGrid({
  totals,
  derivedFriends,
  filteredFriends,
  leaderboard,
  requests,
  activity,
  query,
  onRespondToRequest,
  onOpenPicker,
  onNavigateToFruits,
}) {

  const isSearching = query.trim().length > 0;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:[grid-auto-flow:dense]">
      {/* Hero orchard stat card */}
      <Card className="sm:col-span-2 lg:col-span-2 lg:row-span-2 flex flex-col justify-between">
        <div>
          <Eyebrow>Your Orchard</Eyebrow>
          {/* <div className="mt-3 flex items-baseline gap-3">

            <span
              className="text-6xl leading-none"
              style={{ fontWeight: 700 }}
            >
              {totals.given}
            </span>
            <span className="text-sm opacity-70" >
              fruits gifted
            </span>
          </div> */}
          <div className="mt-3">
            <span className="block text-6xl leading-none font-bold">
              {totals.given}
            </span>

            <span className="mt-2 block text-sm opacity-70">
              fruits gifted
            </span>
          </div>
          <p className="mt-4 text-sm opacity-70" >
            {totals.received} received in return · {derivedFriends.length} people in your grove
          </p>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex -space-x-3">
            {derivedFriends.slice(0, 5).map((f) => (
              <Avatar key={f.id} initials={f.initials} status={f.status} size={40} />
            ))}
          </div>
          <div className="flex gap-2">
            {FRUITS.slice(0, 4).map((f) => (
              <Stamp key={f.name} emoji={f.emoji} color={f.color} size={34} />
            ))}
          </div>
        </div>
      </Card>

      {/* Requests */}
      {/* <Card className="lg:col-span-1"> */}

      {/* Search results — always directly beneath Your Orchard */}
      {/* {isSearching && (
        <div className="lg:col-span-2 lg:col-start-1 grid grid-cols-1 sm:grid-cols-2 gap-4"> */}
      <AnimatePresence mode="popLayout">
        {isSearching && (
          <motion.div
            className="lg:col-span-2 lg:col-start-1 grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            {/* {!isSearching && filteredFriends.map((f) => ( */}
            {filteredFriends.map((f) => (
              <Card key={f.id} className="lg:col-span-1">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar initials={f.initials} status={f.status} />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p
                          className="text-sm font-medium"
                          // style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {f.name}
                        </p>
                        <RelationTag relation={f.relation} />
                      </div>

                      <p className="text-xs opacity-60">
                        {f.mutuals} mutuals · {f.streak} gifts total
                      </p>
                    </div>
                  </div>

                  {f.lastGift && (
                    <Stamp
                      emoji={f.lastGift.emoji}
                      color={f.lastGift.color}
                      size={30}
                    />
                  )}
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <p
                    className="flex items-center gap-1 text-xs opacity-60"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    <Clock size={12} />

                    {f.lastGift
                      ? `${f.lastGift.direction === "sent" ? "you sent" : "they sent"} · ${timeAgo(f.lastGift.date)}`
                      : "no gifts yet"}
                  </p>

                  <button
                    onClick={(event) => onNavigateToFruits(event)}
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium"
                    style={{
                      background: TOKENS.stamp,
                      color: TOKENS.card,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    <Send size={12} />
                    Send fruit
                  </button>
                  {/* <button
                onClick={() => onOpenPicker(f)}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium"
                style={{
                  background: TOKENS.stamp,
                  color: TOKENS.card,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <Send size={12} />
                Send fruit
              </button> */}
                </div>
              </Card>
            ))}

            {/* {filteredFriends.length === 0 && (
            <Card className="sm:col-span-2 text-center"> */}
            {/* {!isSearching && filteredFriends.length === 0 && ( */}
            {filteredFriends.length === 0 && (
              <Card className="sm:col-span-2 lg:col-span-2 text-center">
                <p
                  className="text-sm opacity-60"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  No one in your grove matches "{query}".
                </p>
              </Card>
            )}
          </motion.div>
        )
        }
      </AnimatePresence>
      {/* )
} */}

      {/* Requests */}
      <Card className="lg:col-span-1">

        <Eyebrow>Requests</Eyebrow>
        <div className="mt-3 flex flex-col gap-3">
          {requests.length === 0 && (
            <p className="text-sm opacity-60" >
              No pending requests. Your grove gate is quiet.
            </p>
          )}
          <AnimatePresence initial={false}>
            {requests.map((r) => (
              <motion.div
                key={r.id}
                layout
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.22 }}
                className="flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <Avatar initials={r.initials} size={34} />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium" >
                      {r.name}
                    </p>
                    <p className="text-xs opacity-60">{r.mutuals} mutuals</p>
                  </div>
                </div>
                <div className="flex gap-1.5 shrink-0">
                  <button
                    onClick={() => onRespondToRequest(r.id, true)}
                    className="grid h-7 w-7 place-items-center rounded-full"
                    style={{ background: TOKENS.leaf, color: TOKENS.card }}
                    aria-label={`Accept ${r.name}`}
                  >
                    <Check size={14} />
                  </button>
                  <button
                    onClick={() => onRespondToRequest(r.id, false)}
                    className="grid h-7 w-7 place-items-center rounded-full border"
                    style={{ borderColor: TOKENS.cardLine }}
                    aria-label={`Decline ${r.name}`}
                  >
                    <X size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Card>

      {/* Leaderboard */}
      <Card className="lg:col-span-1 lg:row-span-2">
        <Eyebrow>Top Growers</Eyebrow>
        <p className="mt-1 text-xs opacity-60" >
          Who's gifted you the most
        </p>
        <ul className="mt-4 flex flex-col gap-4">
          {leaderboard.map((l, i) => (
            <li key={l.id} className="flex items-center gap-3">
              {/* <span
                className="text-lg w-5 text-right"
                style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, color: TOKENS.leaf }}
              > */}
              <span
                className="text-lg w-5 text-right"
                style={{ fontWeight: 600, color: TOKENS.leaf }}
              >
                {i + 1}
              </span>
              <Avatar initials={l.initials} size={34} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium" >
                  {l.name}
                </p>
                <p className="text-xs opacity-60" >
                  {l.receivedCount} fruits given to you
                </p>
              </div>
            </li>
          ))}
          {leaderboard.length === 0 && (
            <p className="text-sm opacity-60" >
              No gifts received yet.
            </p>
          )}
        </ul>
        <div className="mt-5 rounded-2xl border border-dashed p-3 text-center" style={{ borderColor: TOKENS.cardLine }}>
          <Sprout size={16} className="mx-auto mb-1" style={{ color: TOKENS.leaf }} />
          <p className="text-xs opacity-70" >
            Gift someone new to grow the board.
          </p>
        </div>
      </Card>

      {/* Invite tile */}
      <Card className="lg:col-span-1 flex flex-col items-start justify-between">
        <Eyebrow>Grow Your Grove</Eyebrow>
        <p className="mt-2 text-sm opacity-70" >
          Invite someone new and send their first fruit on us.
        </p>
        <button
          className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
          style={{ background: TOKENS.ink, color: TOKENS.card }}
        >
          <UserPlus size={15} />
          Invite a friend
        </button>
      </Card>

      {/* Friend / family cards */}
      {/* {filteredFriends.map((f) => ( */}
      {
        !isSearching && filteredFriends.map((f) => (
          <Card key={f.id} className="lg:col-span-1">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Avatar initials={f.initials} status={f.status} />
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-medium" >
                      {f.name}
                    </p>
                    <RelationTag relation={f.relation} />
                  </div>
                  <p className="text-xs opacity-60">{f.mutuals} mutuals · {f.streak} gifts total</p>
                </div>
              </div>
              {f.lastGift && <Stamp emoji={f.lastGift.emoji} color={f.lastGift.color} size={30} />}
            </div>

            <div className="mt-3 flex items-center justify-between">
              <p className="flex items-center gap-1 text-xs opacity-60" >
                <Clock size={12} />
                {f.lastGift
                  ? `${f.lastGift.direction === "sent" ? "you sent" : "they sent"} · ${timeAgo(f.lastGift.date)}`
                  : "no gifts yet"}
              </p>
              <button
                onClick={(event) => onNavigateToFruits(event)}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium"
                style={{ background: TOKENS.stamp, color: TOKENS.card }}
              >
                <Send size={12} />
                Send fruit
              </button>
              {/* <button
          onClick={() => onOpenPicker(f)}
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium"
          style={{ background: TOKENS.stamp, color: TOKENS.card }}
        >
          <Send size={12} />
          Send fruit
        </button> */}
            </div>
          </Card>
        ))
      }

      {/* {filteredFriends.length === 0 && ( */}
      {
        !isSearching && filteredFriends.length === 0 && (
          <Card className="sm:col-span-2 lg:col-span-2 text-center">
            <p className="text-sm opacity-60" >
              No one in your grove matches "{query}".
            </p>
          </Card>
        )
      }

      {/* Activity feed */}
      <Card className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
        <Eyebrow>Grove Activity</Eyebrow>
        <ul className="mt-4 flex flex-col gap-4">
          {activity.map((a) => (
            <li key={a.id} className="flex items-center gap-3">
              <Stamp emoji={a.emoji} color={a.color} size={30} />
              <div className="min-w-0 flex-1">
                <p className="text-sm" >
                  {a.direction === "sent" ? (
                    <>
                      <span className="font-medium">You</span> sent {a.friendName.split(" ")[0]} {a.fruit}
                    </>
                  ) : (
                    <>
                      <span className="font-medium">{a.friendName}</span> sent you {a.fruit}
                    </>
                  )}
                </p>
                <p className="text-xs opacity-50" >
                  {timeAgo(a.date)}
                </p>
              </div>
            </li>
          ))}
          {activity.length === 0 && (
            <p className="text-sm opacity-60" >
              No gifts exchanged yet — send the first one!
            </p>
          )}
        </ul>
      </Card>

      {/* Note tile */}
      <Card className="lg:col-span-1 flex flex-col items-start justify-between">
        <Eyebrow>Pen Pal Note</Eyebrow>
        <p className="mt-2 text-sm opacity-70" >
          Attach a note to your next gift — it shows up on the wax stamp.
        </p>
        <button
          className="mt-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium"
          style={{ borderColor: TOKENS.cardLine }}
        >
          <Mail size={15} />
          Write a note
        </button>
      </Card>
    </div >
  );
}