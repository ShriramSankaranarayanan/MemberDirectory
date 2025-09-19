export interface SearchFilterBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  occupation: string;
  onOccupationChange: (value: string) => void;
  farm: string;
  onFarmChange: (value: string) => void;
  kulam: string;
  onKulamChange: (value: string) => void;
  location: string;
  onLocationChange: (value: string) => void;
  occupationOptions: string[];
  farmOptions: string[];
  kulamOptions: string[];
  locationOptions: string[];
  view: "grid" | "list";
  onViewChange: (view: "grid" | "list") => void;
}
