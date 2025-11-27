export default async function OneVendor({ params }: { params: { id: any } }) {
  const { id } = await params;
  console.log(id);
  return (
    <div className="flex justify-center">
      <section className="pt-40 w-5xl">id is {id}</section>
    </div>
  );
}
