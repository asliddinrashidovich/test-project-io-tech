import Services from "@/components/services/services";

export default async function ServicePage({
  params,
}: {
  params: { id: string };
}) {
  return <Services />;
}
