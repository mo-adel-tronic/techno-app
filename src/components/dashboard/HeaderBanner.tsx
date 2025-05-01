import Link from "next/link";
interface Props {
    title: string;
    linkCreate?: {
        href: string;
        text: string;
    };
}
export default function HeaderBanner({title, linkCreate}: Props) {
  return (
    <div className='flex justify-between items-center bg-app-background px-3 py-2 rounded-lg shadow-md'>
        <p>{title}</p>
        {linkCreate && (
            <Link href={linkCreate.href} className='bg-app-primary text-white px-4 py-2 hover:bg-app-primary2 rounded-lg text-sm'>{linkCreate.text}</Link>
        )}
    </div>
  )
}
