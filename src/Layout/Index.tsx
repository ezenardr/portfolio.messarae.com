import React, { ReactNode, useEffect, useRef, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import StickyHeader from './StickyHeader';
import MobileHeader from './MobileHeader';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [activeSearchComponent, setActiveSearchComponent] = useState<string | null>(null);
  const searchRefs = {
    header: useRef<HTMLDivElement>(null),
    stickyHeader: useRef<HTMLDivElement>(null),
    mobileHeader: useRef<HTMLDivElement>(null),
  };

  const handleSearchOpen = (componentName: string) => {
    setActiveSearchComponent(componentName);
    document.body.classList.add("search-opened");
  };

  const handleClickOutside = (event: MouseEvent) => {
    const isOutside = (ref: React.RefObject<HTMLDivElement>) => {
      return ref.current && !ref.current.contains(event.target as Node);
    };

    if (activeSearchComponent) {
      const activeRef = searchRefs[activeSearchComponent as keyof typeof searchRefs];
      if (activeRef && isOutside(activeRef)) {
        setActiveSearchComponent(null);
        document.body.classList.remove("search-opened");
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [activeSearchComponent]);

  return (
    <React.Fragment>
      <Header searchRef={searchRefs.header} handleSearchOpen={() => handleSearchOpen('header')} />
      <StickyHeader searchRef={searchRefs.stickyHeader} handleSearchOpen={() => handleSearchOpen('stickyHeader')} />
      <MobileHeader searchRef={searchRefs.stickyHeader} handleSearchOpen={() => handleSearchOpen('mobileHeader')} />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
