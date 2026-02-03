import { Link } from "react-router";
import type { IHeaderMenuItem } from "./header-menu.data";
import { cn } from "@/lib/utils";

interface Props {
  item: IHeaderMenuItem;
  isActive?: boolean;
}

export function HeaderMenuItem({ item, isActive }: Props) {
  return (
    <li>
      <Link
        to={item.href}
        className={cn(
          "text-lg sm:text-base",
          isActive ? "opacity-100" : "opacity-70",
        )}
      >
        {item.label}
      </Link>
    </li>
  );
}
