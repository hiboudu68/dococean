import { TransitionGroup, CSSTransition } from "react-transition-group";
import React, {
  PropsWithChildren,
  useRef,
  useEffect,
  ForwardedRef,
} from "react";

import "./styles/globals.css";
import { useRouter } from "next/router";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const nodeRef: ForwardedRef<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (nodeRef.current) {
      nodeRef.current.classList.add("mounted");
    }
  }, []);

  return (
    <>
      <TransitionGroup>
        <CSSTransition
          key={router.asPath}
          nodeRef={nodeRef}
          timeout={150}
          className="page-transition"
          unmountOnExit
        >
          <main ref={nodeRef}>{children}</main>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};
export default Layout;
