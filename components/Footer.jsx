const Footer = () => {
    return(
        <footer className="flex items-center justify-between p-4 bg-gray-200 shadow-inner w-full bottom-0 fixed">
            <p className="text-gray-600"> Website stuff</p>
            <nav>
                <a href="/cool_Link">
                    <span className="text-blue-500 text-lg hover:underline">Cool Link</span>
                </a>
            </nav>

        </footer>

    );
};

export default Footer;