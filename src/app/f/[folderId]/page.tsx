import DriveContents from "../../drive-contents";
import {
  getAllParentsForFolder,
  getFiles,
  getFolders,
} from "~/server/db/queries";

export default async function GoogleDriveClone(props: {
  params: Promise<{ folderId: string }>;
}) {
  const params = await props.params;

  const parsedFolderId = parseInt(params.folderId);
  if (isNaN(parsedFolderId)) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span>Invalid folder ID</span>
      </div>
    );
  }

  const [folders, files, parents] = await Promise.all([
    getFolders(parsedFolderId),
    getFiles(parsedFolderId),
    getAllParentsForFolder(parsedFolderId),
  ]);

  return <DriveContents files={files} folders={folders} parents={parents} />;
}
