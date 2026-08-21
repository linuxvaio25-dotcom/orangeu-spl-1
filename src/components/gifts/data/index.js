/**
 * data/index.js
 * ---------------------------------------------------------
 * Source of truth for everyone in a user's Grove — friends and
 * family — plus the full history of fruit gifts exchanged with
 * each of them. GiftsPage derives everything else (totals,
 * leaderboard, activity feed, "last gift") from this data, so
 * this file is the only place that needs to change when you
 * wire up a real API.
 *
 * gifts[].direction:
 *   "sent"     -> the current user sent this fruit to that person
 *   "received" -> that person sent this fruit to the current user
 *
 * Swap this file for a fetch()/API layer later; just keep the
 * same shape (or adjust the derive helpers in FriendsPage.jsx
 * to match your real schema).
 */

// Fruit catalog: the only fruits that can currently be gifted.
// `color` drives the wax-stamp color in the UI.
export const FRUITS = [
  { name: "Mango", emoji: "🥭", color: "#E38F35" },
  { name: "Watermelon", emoji: "🍉", color: "#D6564A" },
  { name: "Grapes", emoji: "🍇", color: "#6C4B8F" },
  { name: "Orange", emoji: "🍊", color: "#B79017" },
  { name: "Fig", emoji: "🍈", color: "#7A4B3A" },
  { name: "Cherry", emoji: "🍒", color: "#B23A2E" },
];

// People in the user's Grove, each with a full gift history.
export const friends = [
  {
    id: "f1",
    name: "Priya Nair",
    initials: "PN",
    relation: "friend",
    status: "online",
    mutuals: 6,
    gifts: [
      { id: "g1", fruit: "Mango", direction: "received", date: "2026-08-19T07:10:00Z" },
      { id: "g2", fruit: "Grapes", direction: "sent", date: "2026-08-12T15:00:00Z" },
      { id: "g3", fruit: "Cherry", direction: "received", date: "2026-08-03T09:00:00Z" },
      { id: "g4", fruit: "Orange", direction: "sent", date: "2026-07-21T12:00:00Z" },
    ],
  },
  {
    id: "f2",
    name: "Owen Clark",
    initials: "OC",
    relation: "friend",
    status: "online",
    mutuals: 3,
    gifts: [
      { id: "g5", fruit: "Grapes", direction: "sent", date: "2026-08-18T18:30:00Z" },
      { id: "g6", fruit: "Fig", direction: "received", date: "2026-08-09T11:00:00Z" },
    ],
  },
  {
    id: "f3",
    name: "Marisol Vega",
    initials: "MV",
    relation: "family",
    status: "offline",
    mutuals: 9,
    gifts: [
      { id: "g7", fruit: "Watermelon", direction: "received", date: "2026-08-16T08:00:00Z" },
      { id: "g8", fruit: "Watermelon", direction: "received", date: "2026-08-01T08:00:00Z" },
      { id: "g9", fruit: "Mango", direction: "sent", date: "2026-07-28T14:00:00Z" },
      { id: "g10", fruit: "Cherry", direction: "received", date: "2026-07-15T10:00:00Z" },
      { id: "g11", fruit: "Orange", direction: "received", date: "2026-07-02T10:00:00Z" },
    ],
  },
  {
    id: "f4",
    name: "Kenji Sato",
    initials: "KS",
    relation: "friend",
    status: "online",
    mutuals: 2,
    gifts: [
      { id: "g12", fruit: "Orange", direction: "received", date: "2026-08-19T09:45:00Z" },
    ],
  },
  {
    id: "f5",
    name: "Ama Boateng",
    initials: "AB",
    relation: "family",
    status: "offline",
    mutuals: 5,
    gifts: [
      { id: "g13", fruit: "Cherry", direction: "received", date: "2026-08-11T13:00:00Z" },
      { id: "g14", fruit: "Fig", direction: "sent", date: "2026-08-04T16:00:00Z" },
      { id: "g15", fruit: "Mango", direction: "received", date: "2026-07-25T13:00:00Z" },
    ],
  },
  {
    id: "f6",
    name: "Leah Fischer",
    initials: "LF",
    relation: "friend",
    status: "online",
    mutuals: 1,
    gifts: [
      { id: "g16", fruit: "Fig", direction: "received", date: "2026-08-19T02:00:00Z" },
    ],
  },
];

// Incoming friend requests — not part of the Grove/gift data yet.
export const requests = [
  { id: "r1", name: "Diego Ramos", initials: "DR", mutuals: 4 },
  { id: "r2", name: "Yuki Tanaka", initials: "YT", mutuals: 2 },
];