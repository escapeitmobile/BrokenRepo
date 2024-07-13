import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import {
  CodeFilled,
  AppstoreFilled,
  DollarCircleFilled,
  LockFilled,
  ReadFilled,
  RocketFilled,
  SwitcherFilled,
  DashboardFilled,
} from "@ant-design/icons";

const generateGameMenuItems = (games) => {
  
  return games.map((game) => ({
    id: `game-${game.id}`,
    title: <span className="label">{game.gamename}</span>,
    type: "collapse",
    icon: (isSelected, color) => (
      <CodeFilled
        className="icon"
        style={{
          background: isSelected ? color : "",
        }}
      />
    ),
    children: [
      {
        id: `${game.id}-routes`,
        title: "Game Routes",
        type: "item",
        url: `/${game.id}/routes`,
      },
      {
        id: `${game.id}-live-tracker`,
        title: "Live Tracker",
        type: "item",
        url: `/${game.id}/live-tracker`,
      },
      {
        id: `${game.id}-leader-board`,
        title: "Leader Board",
        type: "item",
        url: `/${game.id}/leader-board`,
      },
      {
        id: `${game.id}-marketing-materials`,
        title: "Marketing Materials",
        type: "item",
        url: `/${game.id}/marketing-materials`,
      },
    ],
  }));
};

const MenuItems = () => {
  const games = useContext(GameContext);

  const menuItems = {
    items: [
      {
        id: "null0",
        title: "",
        className: "d-none",
        type: "group",
        children: [
          {
            id: "das",
            title: <span className="label">Dashboard</span>,
            type: "collapse",
            icon: (isSelected, color) => (
              <DashboardFilled
                className="icon"
                style={{
                  background: isSelected ? color : "",
                }}
              />
            ),
            children: [
              {
                id: "gamelist",
                title: "Game Line-Up",
                type: "item",
                url: "/pages/GameList",
              },
              {
                id: "performance-metrics",
                title: "Performance Metrics",
                type: "item",
                url: "#",
              },
            ],
          },
        ],
      }, /*
      {
        id: "game-lineup",
        title: "Game Line-Up",
        type: "group",
        children: generateGameMenuItems(games),
      }, */
      {
        id: "partner-resources",
        title: "Partner Resources",
        type: "group",
        children: [
          {
            id: "documentation",
            title: "Documentation",
            type: "item",
            url: "#",
            icon: (isSelected, color) => (
              <ReadFilled
                className="icon"
                style={{
                  background: isSelected ? color : "",
                }}
              />
            ),
          },
          {
            id: "game-faqs",
            title: "Game FAQs",
            type: "item",
            url: "#",
            icon: (isSelected, color) => (
              <RocketFilled
                className="icon"
                style={{
                  background: isSelected ? color : "",
                }}
              />
            ),
          },
          {
            id: "partners-forum",
            title: "Partner's Forum",
            type: "item",
            url: "#",
            icon: (isSelected, color) => (
              <SwitcherFilled
                className="icon"
                style={{
                  background: isSelected ? color : "",
                }}
              />
            ),
          },
          {
            id: "support-tickets",
            title: <span className="label">Support Tickets</span>,
            type: "collapse",
            icon: (isSelected, color) => (
              <LockFilled
                className="icon"
                style={{
                  background: isSelected ? color : "",
                }}
              />
            ),
            children: [
              {
                id: "my-tickets",
                title: "My Tickets",
                type: "item",
                url: "#",
              },
              {
                id: "submit-ticket",
                title: "Submit a Ticket",
                type: "item",
                url: "#",
              },
            ],
          },
        ],
      },
      {
        id: "account-management",
        title: "Account Management",
        type: "group",
        children: [
          {
            id: "profile-settings",
            title: "Profile Settings",
            type: "item",
            url: "#",
            icon: (isSelected, color) => (
              <AppstoreFilled
                className="icon"
                style={{
                  background: isSelected ? color : "",
                }}
              />
            ),
          },
          {
            id: "payment-methods",
            title: "Payment Methods",
            type: "item",
            url: "#",
            icon: (isSelected, color) => (
              <DollarCircleFilled
                className="icon"
                style={{
                  background: isSelected ? color : "",
                }}
              />
            ),
          },
          {
            id: "my-subscriptions",
            title: "My Subscriptions",
            type: "item",
            url: "#",
            icon: (isSelected, color) => (
              <RocketFilled
                className="icon"
                style={{
                  background: isSelected ? color : "",
                }}
              />
            ),
          },
          {
            id: "my-invoices",
            title: "My Invoices",
            type: "item",
            url: "#",
            icon: (isSelected, color) => (
              <SwitcherFilled
                className="icon"
                style={{
                  background: isSelected ? color : "",
                }}
              />
            ),
          },
        ],
      },
    ],
  };

  return menuItems;
};

export default MenuItems;
