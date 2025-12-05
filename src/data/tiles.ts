import { 
  Settings, 
  Handshake, 
  UserCircle, 
  ShoppingCart, 
  Link2, 
  Users, 
  Shield, 
  Key, 
  Bell,
  FileText,
  HelpCircle,
  BarChart3
} from "lucide-react";
import { TileData } from "@/types/tile";

export const allTiles: TileData[] = [
  {
    id: "partner-self-service",
    title: "Partner Self Service",
    description: "Associate your account with a partner company or register your company as a partner.",
    linkText: "Go to Partner Self Service",
    icon: Settings,
  },
  {
    id: "partner-order-services",
    title: "Partner Order Services",
    description: "Order services through your global network of certified partners.",
    linkText: "Go to Order Services",
    icon: Handshake,
  },
  {
    id: "customer-portal",
    title: "Customer Portal",
    description: "Associate your account with a contract number or bill-to ID.",
    linkText: "Go to Customer Portal",
    icon: UserCircle,
  },
  {
    id: "commerce-express",
    title: "Commerce Express",
    description: "Associate your account with a partner company or register your company as a partner.",
    linkText: "Go to Partner Self Service",
    icon: ShoppingCart,
  },
  {
    id: "supply-chain",
    title: "Supply Chain",
    description: "Apply Supply Chain tools and resources.",
    linkText: "Go to Supply Chain Portal",
    icon: Link2,
  },
  {
    id: "community",
    title: "Community",
    description: "Connect with peer and experts to ask for help and share your expertise.",
    linkText: "Go to Community",
    icon: Users,
  },
  {
    id: "access-management",
    title: "Access Management",
    description: "Control user access with MFA, SSO, and adaptive policies.",
    linkText: "Go to Access Management",
    icon: Shield,
  },
  {
    id: "licensing-central",
    title: "Licensing Central",
    description: "Manage your licenses, renewals, and entitlements.",
    linkText: "Go to Licensing Central",
    icon: Key,
  },
  {
    id: "notification-center",
    title: "My Notification Center",
    description: "Manage the notifications you receive by resource type.",
    linkText: "Go to My Notification Center",
    icon: Bell,
  },
  {
    id: "documentation",
    title: "Documentation",
    description: "Access technical documentation and user guides.",
    linkText: "Go to Documentation",
    icon: FileText,
  },
  {
    id: "support-center",
    title: "Support Center",
    description: "Get help from our support team and access FAQs.",
    linkText: "Go to Support Center",
    icon: HelpCircle,
  },
  {
    id: "analytics",
    title: "Analytics Dashboard",
    description: "View usage statistics and performance metrics.",
    linkText: "Go to Analytics",
    icon: BarChart3,
  },
];

export const defaultTileIds = [
  "partner-self-service",
  "partner-order-services",
  "customer-portal",
  "commerce-express",
  "supply-chain",
  "community",
  "access-management",
  "licensing-central",
  "notification-center",
];
