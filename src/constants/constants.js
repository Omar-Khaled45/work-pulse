export const BADGE_STYLE = {
  // Projects and tasks status
  active: {
    label: "Active",
    className: "bg-active text-active-foreground border-active-border",
  },
  "in-progress": {
    label: "In Progress",
    className: "bg-active text-active-foreground border-active-border",
  },
  completed: {
    label: "Completed",
    className: "bg-completed text-completed-foreground border-completed-border",
  },
  done: {
    label: "Done",
    className: "bg-completed text-completed-foreground border-completed-border",
  },
  todo: {
    label: "Todo",
    className: "bg-secondary text-secondary-foreground",
  },

  // Tasks priorities
  low: {
    label: "Low",
    className: "bg-low text-low-foreground border-low-border",
  },
  medium: {
    label: "Medium",
    className: "bg-medium text-medium-foreground border-medium-border",
  },
  high: {
    label: "High",
    className: "bg-high text-high-foreground border-high-border",
  },
};
