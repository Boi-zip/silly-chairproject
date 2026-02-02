//ChatGPT generated this component since I had problems with animations and playing it when it's in view
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

export default function AnimatedItem({
  children,
  className,
  animation //changed this to something useful
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={clsx(
        "animate__animated",
        className,
        inView ? `${animation}` : `opacity-0`)} //same with this
    >
      {children}
    </div>
  );
}