import { socials } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          <div className="small-compact flex flex-1/2 flex-wrap items-center justify-start gap-5">
            <p className="opacity-70">
              Made with Love by <span className="text-p1">Nooreldin</span>
            </p>
            <div className="flex items-center justify-center sm:ml-auto">
              <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1 cursor-pointer">
                Privacy Policy
              </p>
              <p className="relative text-p5 transition-all duration-500 hover:text-p1 cursor-pointer">
                Terms of use
              </p>
            </div>
          </div>
          <ul className="flex flex-1 justify-end gap-3 max-md:mt-10 max-md:justify-center">
            {socials.map(({ icon, id, title, url }) => (
              <li key={id}>
                <a href={url} className="social-icon">
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/3 object-contain "
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
