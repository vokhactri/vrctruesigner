import Link from "next/link";

/**
 * Footer component with company links and copyright information
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-vrc-border/50 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Services Column */}
          <div>
            <h3 className="text-vrc-foreground font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://verichains.io/security-services/blockchain-security/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vrc-foreground-subtle hover:text-vrc-cyan transition-colors"
                >
                  Blockchain Security
                </Link>
              </li>
              <li>
                <Link
                  href="https://verichains.io/security-services/full-scale-penetration-testing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vrc-foreground-subtle hover:text-vrc-cyan transition-colors"
                >
                  Pentest
                </Link>
              </li>
              <li>
                <Link
                  href="https://verichains.io/security-services/security-compliance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vrc-foreground-subtle hover:text-vrc-cyan transition-colors"
                >
                  GRC
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-vrc-foreground font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://verichains.io/security-advisory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vrc-foreground-subtle hover:text-vrc-cyan transition-colors"
                >
                  Security Advisory
                </Link>
              </li>
              <li>
                <Link
                  href="https://blog.verichains.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vrc-foreground-subtle hover:text-vrc-cyan transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-vrc-foreground font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://verichains.io/contact-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vrc-foreground-subtle hover:text-vrc-cyan transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="https://career.verichains.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vrc-foreground-subtle hover:text-vrc-cyan transition-colors"
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-vrc-foreground font-semibold mb-4">Contact</h3>
            <p className="text-vrc-foreground-subtle text-sm">
              Visit{" "}
              <Link
                href="https://verichains.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vrc-cyan hover:underline"
              >
                verichains.io
              </Link>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-vrc-border pt-8">
          <p className="text-vrc-foreground-subtle text-sm text-center">
            Copyright © {currentYear} VERICHAINS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
