import { db } from "~/server/db";
import {
  files_table as fileSchema,
  folders_table as folderSchema,
} from "~/server/db/schema";
import DriveContents from "./drive-contents";

export default function HomePage() {
  return (
    <h1 className="flex min-h-screen items-center justify-center text-2xl">
      Mega Clone ^_^
    </h1>
  );
}
