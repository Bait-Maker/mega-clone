# Mega Clone

## TODO

- [x] set up database and data model
- [x] Move folder open state to URL
- [x] Add auth
- [x] Add file uploading
- [x] Add analytics
- [x] Make sure sort oder is consistent
- [x] Add delete
- [ ] Real homepage + onboarding

## Fun follow ups

### Folder deletions

- Make sure you fetch all the folders that have it as a parent, and their children too. Collect all the things you need to delete by going all the way down, keeping track of all of them and deleting all in one pass

### Folder creations

- Make a server actions that takes a name and parentId, and creates a folder with that name and parentId (don't forget to set the ownerId).

### Access control

- Check to make sure user is owner before showing folder page. Need to add an extra check param in /f/[folderID]/page.tsx file

### Make a "file view page"

- Make a UI for files to be rendered on the page when clicked on

### Toasts

- Add loading states and progress UI, ex. when uploading files

### Gray out a row when it's being deleted

- changing state and css or useTransition hook [startTransition, pending] = useTransition()

# Music Side

## TODO

- [ ] Merge drive dash board UI with music UI
- [ ] Create a side navbar to switch between drive and music storage
