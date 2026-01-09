import { useHydration } from "@/hooks/useHydration";

type Props = {
  children: React.ReactNode;
};

export const ProtectedRoute = ({ children }: Props) => {
  const isHydrated = useHydration();

  if (!isHydrated) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};
