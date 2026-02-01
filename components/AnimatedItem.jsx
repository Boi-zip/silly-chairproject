import { useInView } from "react-intersection-observer";
import clsx from "clsx";

export default function AnimatedItem({
  children,
  className,
  animation
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={clsx(
        "animate__animated",
        className,
        inView ? `${animation}` : `opacity-0`)}
    >
      {children}
    </div>
  );
}