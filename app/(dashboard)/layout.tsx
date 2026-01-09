import { Layout } from "@/containers";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return <Layout>{children}</Layout>;
}
