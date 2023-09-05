import { UserResource } from "@clerk/types";
import { Avatar } from "@mui/material";

type TrainerData = {
  id: string,
  created_at: string,
  userId: string,
  firstName: string,
  lastName: string,
  certified: boolean,
  username: string,
  ratings: number[],
  email: string
} | null

export function ProfileHeader({ user, trainerData }: { user: UserResource, trainerData: TrainerData }) {
  console.log(trainerData)
  return <>
    <Avatar src={user.imageUrl} sx={{ width: 60, height: 60 }} />
    <h1>{user.fullName}</h1>
  </>
}
