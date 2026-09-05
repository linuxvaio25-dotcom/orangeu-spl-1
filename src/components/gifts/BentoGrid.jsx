import React from "react";
import { motion, AnimatePresence } from "framer-motion";
// import "../components/gifts/gifts.css";
import "./gifts.css";
import {
  UserPlus,
  Check,
  X,
  Send,
  Sprout,
  Clock,
  Mail,
} from "lucide-react";

import { FRUITS } from "./data/index.js";
import {
  TOKENS,
  Avatar,
  Eyebrow,
  RelationTag,
  Card,
  Stamp,
} from "./ui";

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
    <div className="flex flex-col gap-4">

      {/* =====================================================
          TOP BENTO
          Orchard + Requests + Top Growers + Invite
      ===================================================== */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {/* Your Orchard */}
        {/* <Card className="sm:col-span-2 lg:col-span-2 flex flex-col justify-between"> */}
        <Card className="sm:col-span-2 lg:col-span-2 lg:row-span-2 flex flex-col justify-between">
          <div>
            <Eyebrow>Your Orchard</Eyebrow>

            <div className="mt-3">
              <span className="block text-6xl leading-none font-bold">
                {totals.given}
              </span>

              <span className="mt-2 block text-sm opacity-70">
                fruits gifted
              </span>
            </div>

            <p className="mt-4 text-sm opacity-70">
              {totals.received} received in return ·{" "}
              {derivedFriends.length} people in your grove
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex -space-x-3">
              {derivedFriends.slice(0, 5).map((f) => (
                <Avatar
                  key={f.id}
                  initials={f.initials}
                  status={f.status}
                  size={40}
                />
              ))}
            </div>

            <div className="flex gap-2">
              {FRUITS.slice(0, 4).map((f) => (
                <Stamp
                  key={f.name}
                  emoji={f.emoji}
                  color={f.color}
                  size={34}
                />
              ))}
            </div>
          </div>
        </Card>

        {/* Requests */}
        <Card className="lg:col-span-1">
          <div className="flex items-center justify-between">
            <Eyebrow>Friend Requests</Eyebrow>

            {requests.length > 0 && (
              <span className="text-xs opacity-60">
                {requests.length}
              </span>
            )}
          </div>

          {/* <div className="mt-4 flex max-h-64 flex-col gap-3 overflow-y-auto pr-1"> */}
          <div className="card-scroll mt-4 flex max-h-64 flex-col gap-3 overflow-y-auto pr-1">
            <AnimatePresence initial={false}>
              {requests.map((r) => (
                <motion.div
                  key={r.id}
                  layout
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.22 }}
                  className="flex items-center justify-between gap-3 rounded-2xl p-2"
                >
                  <div className="flex min-w-0 items-center gap-2">
                    <Avatar initials={r.initials} size={34} />

                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">
                        {r.name}
                      </p>

                      <p className="text-xs opacity-60">
                        {r.mutuals} mutuals
                      </p>
                    </div>
                  </div>

                  <div className="flex shrink-0 gap-1.5">
                    <button
                      onClick={() =>
                        onRespondToRequest(r.id, true)
                      }
                      className="grid h-8 w-8 place-items-center rounded-full transition-transform hover:scale-105"
                      style={{
                        background: TOKENS.leaf,
                        color: TOKENS.card,
                      }}
                      aria-label={`Accept ${r.name}`}
                    >
                      <Check size={14} />
                    </button>

                    <button
                      onClick={() =>
                        onRespondToRequest(r.id, false)
                      }
                      className="grid h-8 w-8 place-items-center rounded-full border transition-transform hover:scale-105"
                      style={{
                        borderColor: TOKENS.cardLine,
                      }}
                      aria-label={`Decline ${r.name}`}
                    >
                      <X size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {requests.length === 0 && (
              <p className="text-sm opacity-60">
                No pending requests. Your grove gate is quiet.
              </p>
            )}
          </div>
        </Card>

        {/* Top Growers */}
        {/* <Card className="lg:col-span-1"> */}
        <Card className="lg:col-span-1 lg:row-span-2">
          <div className="flex items-center justify-between">
            <Eyebrow>Top Growers</Eyebrow>

            <Sprout
              size={17}
              strokeWidth={1.8}
              className="opacity-60"
            />
          </div>

          <p className="mt-1 text-xs opacity-60">
            Who's gifted you the most
          </p>

          {/* <ul className="mt-4 flex max-h-64 flex-col gap-3 overflow-y-auto pr-1"> */}
          <ul className="card-scroll mt-4 flex max-h-64 flex-col gap-3 overflow-y-auto pr-1">
            {leaderboard.map((l, i) => (
              <li
                key={l.id}
                className="flex items-center gap-3 rounded-2xl p-2"
              >
                <span
                  className="w-5 shrink-0 text-right text-lg"
                  style={{
                    fontWeight: 600,
                    color: TOKENS.leaf,
                  }}
                >
                  {i + 1}
                </span>

                <Avatar initials={l.initials} size={34} />

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">
                    {l.name}
                  </p>

                  <p className="text-xs opacity-60">
                    {l.receivedCount} fruits given to you
                  </p>
                </div>
              </li>
            ))}

            {leaderboard.length === 0 && (
              <p className="text-sm opacity-60">
                No gifts received yet.
              </p>
            )}
          </ul>

          <div
            className="mt-4 rounded-2xl border border-dashed p-3 text-center"
            style={{
              borderColor: TOKENS.cardLine,
            }}
          >
            <Sprout
              size={16}
              className="mx-auto mb-1"
              style={{
                color: TOKENS.leaf,
              }}
            />

            <p className="text-xs opacity-70">
              Gift someone new to grow the board.
            </p>
          </div>
        </Card>

        {/* Invite */}
        <Card className="lg:col-span-1 flex flex-col items-start justify-between">
          <div>
            <div className="flex w-full items-center justify-between">
              <Eyebrow>Grow Your Grove</Eyebrow>

              <UserPlus
                size={17}
                strokeWidth={1.8}
                className="opacity-60"
              />
            </div>

            <p className="mt-3 text-sm leading-relaxed opacity-70">
              Invite someone new and send their first fruit on us.
            </p>
          </div>

          <button
            className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-transform hover:scale-105"
            style={{
              background: TOKENS.ink,
              color: TOKENS.card,
            }}
          >
            <UserPlus size={15} />
            Invite a friend
          </button>
        </Card>
      </div>

      {/* =====================================================
          SEARCH RESULTS
      ===================================================== */}
      <AnimatePresence mode="popLayout">
        {isSearching && (
          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            initial={{
              opacity: 0,
              y: -12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            {filteredFriends.map((f) => (
              <Card key={f.id}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <Avatar
                      initials={f.initials}
                      status={f.status}
                    />

                    <div className="min-w-0">
                      <div className="flex min-w-0 items-center gap-1.5">
                        <p className="truncate text-sm font-medium">
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

                <div className="mt-3 flex items-center justify-between gap-2">
                  <p className="flex min-w-0 items-center gap-1 text-xs opacity-60">
                    <Clock size={12} />

                    <span className="truncate">
                      {f.lastGift
                        ? `${f.lastGift.direction === "sent"
                          ? "you sent"
                          : "they sent"
                        } · ${timeAgo(f.lastGift.date)}`
                        : "no gifts yet"}
                    </span>
                  </p>

                  <button
                    onClick={(event) =>
                      onNavigateToFruits(event)
                    }
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-transform hover:scale-105"
                    style={{
                      background: TOKENS.stamp,
                      color: TOKENS.card,
                    }}
                  >
                    <Send size={12} />
                    Send fruit
                  </button>
                </div>
              </Card>
            ))}

            {filteredFriends.length === 0 && (
              <Card className="sm:col-span-2 lg:col-span-4 text-center">
                <p className="text-sm opacity-60">
                  No one in your grove matches "{query}".
                </p>
              </Card>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          FRIENDS & FAMILY
      ===================================================== */}
      {!isSearching && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredFriends.map((f) => (
            <Card
              key={f.id}
              className="transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <Avatar
                    initials={f.initials}
                    status={f.status}
                  />

                  <div className="min-w-0">
                    <div className="flex min-w-0 items-center gap-1.5">
                      <p className="truncate text-sm font-medium">
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
                    size={32}
                  />
                )}
              </div>

              {/* <div className="mt-3 flex items-center justify-between gap-2"> */}
              <div className="mt-4 flex min-h-8 items-center justify-between gap-2">
                <p className="flex min-w-0 items-center gap-1 text-xs opacity-60">
                  <Clock size={12} />

                  <span className="truncate">
                    {f.lastGift
                      ? `${f.lastGift.direction === "sent"
                        ? "you sent"
                        : "they sent"
                      } · ${timeAgo(f.lastGift.date)}`
                      : "no gifts yet"}
                  </span>
                </p>

                <button
                  onClick={(event) =>
                    onNavigateToFruits(event)
                  }
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-transform hover:scale-105"
                  style={{
                    background: TOKENS.stamp,
                    color: TOKENS.card,
                  }}
                >
                  <Send size={12} />
                  Gift fruit
                </button>
              </div>
            </Card>
          ))}

          {filteredFriends.length === 0 && (
            <Card className="sm:col-span-2 lg:col-span-4 text-center">
              <p className="text-sm opacity-60">
                No one in your grove matches "{query}".
              </p>
            </Card>
          )}
        </div>
      )}

      {/* =====================================================
          ACTIVITY + NOTE
      ===================================================== */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {/* Activity */}
        <Card className="sm:col-span-2 lg:col-span-3">
          <div className="flex items-center justify-between">
            <Eyebrow>Grove Activity</Eyebrow>

            <span className="text-xs opacity-50">
              Recent
            </span>
          </div>

          {/* <ul className="mt-4 flex flex-col gap-4"> */}
          {/* <ul className="mt-4 max-h-48 overflow-y-auto pr-1 flex flex-col gap-4 growers-scroll"> */}
          <ul className="card-scroll mt-4 flex max-h-64 flex-col gap-4 overflow-y-auto pr-1">
            {activity.map((a) => (
              //changed to wrap text for smaller screens
              <li
                key={a.id}
                className="flex items-start gap-3 rounded-2xl p-2"
              >
                <Stamp
                  emoji={a.emoji}
                  color={a.color}
                  size={34}
                />

                <div className="min-w-0 flex-1">
                  <p className="text-sm leading-relaxed">
                    {a.direction === "sent" ? (
                      <>
                        <span className="font-medium">You</span>{" "}
                        sent {a.friendName.split(" ")[0]} {a.fruit}
                      </>
                    ) : (
                      <>
                        <span className="font-medium">{a.friendName}</span>{" "}
                        sent you {a.fruit}
                      </>
                    )}
                  </p>
                </div>

                <span className="shrink-0 pt-0.5 text-xs opacity-50">
                  {timeAgo(a.date)}
                </span>
              </li>


              // <li
              //   key={a.id}
              //   className="flex items-center gap-3 rounded-2xl p-2"
              // >
              //   <Stamp
              //     emoji={a.emoji}
              //     color={a.color}
              //     size={34}
              //   />

              //   <div className="min-w-0 flex-1">
              //     <p className="truncate text-sm">
              //       {a.direction === "sent" ? (
              //         <>
              //           <span className="font-medium">You</span>{" "}
              //           sent {a.friendName.split(" ")[0]} {a.fruit}
              //         </>
              //       ) : (
              //         <>
              //           <span className="font-medium">{a.friendName}</span>{" "}
              //           sent you {a.fruit}
              //         </>
              //       )}
              //     </p>
              //   </div>

              //   <span className="shrink-0 text-xs opacity-50">
              //     {timeAgo(a.date)}
              //   </span>
              // </li>


              // <li
              //   key={a.id}
              //   className="flex items-center gap-3 rounded-2xl p-2"
              // >
              //   <Stamp
              //     emoji={a.emoji}
              //     color={a.color}
              //     size={34}
              //   />

              //   <div className="min-w-0 flex-1">
              //     <p className="text-sm">
              //       {a.direction === "sent" ? (
              //         <>
              //           <span className="font-medium">
              //             You
              //           </span>{" "}
              //           sent {a.friendName.split(" ")[0]}{" "}
              //           {a.fruit}
              //         </>
              //       ) : (
              //         <>
              //           <span className="font-medium">
              //             {a.friendName}
              //           </span>{" "}
              //           sent you {a.fruit}
              //         </>
              //       )}
              //     </p>

              //     <p className="text-xs opacity-50">
              //       {timeAgo(a.date)}
              //     </p>
              //   </div>
              // </li>
            ))}

            {activity.length === 0 && (
              <p className="text-sm opacity-60">
                No gifts exchanged yet — send the first one!
              </p>
            )}
          </ul>
        </Card>

        {/* Note */}
        <Card className="lg:col-span-1 flex flex-col items-start justify-between">
          <div>
            <div className="flex w-full items-center justify-between">
              <Eyebrow>Pen Pal Note</Eyebrow>

              <Mail
                size={17}
                strokeWidth={1.8}
                className="opacity-60"
              />
            </div>

            <p className="mt-3 text-sm leading-relaxed opacity-70">
              Add a little something to your next gift. Your
              note travels with the fruit.
            </p>
          </div>

          <button
            className="mt-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-transform hover:scale-105"
            style={{
              borderColor: TOKENS.cardLine,
            }}
          >
            <Mail size={15} />
            Write a note
          </button>
        </Card>
      </div>
    </div>
  );
}