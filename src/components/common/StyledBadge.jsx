import { STATUS_AND_PRIORITY } from "@/constants/constants";

import { Badge } from "@/components/ui/badge";

const StyledBadge = ({ style = "unknown", className = "" }) => {
  const config = STATUS_AND_PRIORITY[style];

  if (!config) return <Badge variant="secondary">{style}</Badge>;

  return (
    <Badge className={`text-sm ${config.className} ${className}`}>
      {config.label}
    </Badge>
  );
};

export default StyledBadge;
