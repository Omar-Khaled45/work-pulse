import { BADGE_STYLE } from "@/constants/constants";
import { Badge } from "../ui/badge";

const StyledBadge = ({ style = "unknown" }) => {
  const config = BADGE_STYLE[style];

  if (!config) return <Badge variant="secondary">{style}</Badge>;

  return (
    <Badge className={`text-sm ${config.className}`}>{config.label}</Badge>
  );
};

export default StyledBadge;
