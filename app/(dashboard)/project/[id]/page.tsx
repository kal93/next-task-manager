import TaskCard from "@tm/components/TaskCard";
import { getUserFromCookie } from "@tm/lib/auth";
import { db } from "@tm/lib/db";
import { cookies } from "next/headers";

const getData = async (id) => {
  const user = await getUserFromCookie(cookies());
  const project = await db.project.findFirst({
    where: {
      id,
      ownerId: user?.id,
    },
    include: {
      tasks: true,
    },
  });

  return project;
};

export default async function ProjectPage({ params }) {
    const project = await getData(params.id);
    return <div>
        <TaskCard tasks={project?.tasks} title={project?.name}/>
    </div>
}
