import supabase from "@/supabase"

type Trainer = {
  id: number
  firstName: string
  lastName: string
  email: string
  certified: boolean,
  ratings: number[],
}

export async function PersonalTrainers() {
  const { data: trainers, error } = await supabase
    .from('trainers')
    .select()
  
  if (error) return <>Error</>;

  return !trainers || trainers.length === 0 ? <>No trainers</> : (
    <div>
      {trainers.map(trainer =>
        <Trainer
          key={trainer.id}
          trainer={trainer}
        />
      )}
    </div>
  )
}

function Trainer({ trainer }: { trainer: Trainer }) {
  return <div>
    <div>{trainer.firstName} {trainer.lastName}</div>
    <div>{trainer.email}</div>
  </div>
}