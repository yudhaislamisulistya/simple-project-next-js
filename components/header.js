import Link from "next/link";

export default function Header() {
    return (
        <>
            <div class="v6_61">
                <div class="v6_71"><span class="v6_5">CREDIFYSHOP</span></div>
                <div class="v6_72">
                    <Link href={'/'}>
                        <span class="v6_60">Home</span>
                    </Link>
                    <Link href={'/about'}>
                        <span class="v6_62">About Us</span>
                    </Link>
                    <Link href={'/contact'}>
                        <span class="v6_63">Contact</span>
                    </Link>
                    <Link href={'/team'}>
                        <span class="v6_64">Team</span>
                    </Link>
                </div>
            </div>
        </>
    );
}