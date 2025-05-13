export default async function LazyComponent({children} : Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    {children}
    </>
  )
}
