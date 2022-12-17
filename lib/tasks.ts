

export type taskNoteType = {
    title: string,
              noteItems: string[],
              noteWhy: string,
}

export type taskType = {
    name: string,
          imageSrc: string,
          link: string,
          note: taskNoteType,
          completed: boolean,
  }

export const tasks: taskType[] = [
    {
        name: "Audio Donation",
        imageSrc: "https://ssl.gstatic.com/social/villagecrowdui/images/v13_task_illustration_caption-01.svg",
        link: "/audio-donation",
        note: {
            title: "Help improve food search",
            noteItems: [
                "Look at two food images, and indicate how they compare on a certain criterion",
                "Choose the answer that best represents your opinion",
                "Choose Skip - if you are not sure",
                "If the names of the dishes do not match the images, try focusing on the <b>images only</b> to choose your answer",
            ],
            noteWhy: "Your contributions will help improve how you can search for Food."
        },
        completed: true,
      },
      {
        name: "Audio Donation",
        imageSrc: "https://ssl.gstatic.com/social/villagecrowdui/images/v13_task_illustration_caption-01.svg",
        link: "/correct1",
        note: {
            title: "Help improve food search",
            noteItems: [
                "Look at two food images, and indicate how they compare on a certain criterion",
                "Choose the answer that best represents your opinion",
                "Choose Skip - if you are not sure",
                "If the names of the dishes do not match the images, try focusing on the <b>images only</b> to choose your answer",
            ],
            noteWhy: "Your contributions will help improve how you can search for Food."
        },
        completed: false,
      },
      {
        name: "Audio Donation",
        imageSrc: "https://ssl.gstatic.com/social/villagecrowdui/images/v13_task_illustration_caption-01.svg",
        link: "/correct2",
        note: {
            title: "Help improve food search",
            noteItems: [
                "Look at two food images, and indicate how they compare on a certain criterion",
                "Choose the answer that best represents your opinion",
                "Choose Skip - if you are not sure",
                "If the names of the dishes do not match the images, try focusing on the <b>images only</b> to choose your answer",
            ],
            noteWhy: "Your contributions will help improve how you can search for Food."
        },
        completed: false,
      },
]

export const getAllTaskIds = () => {
    const listOfIds = tasks.map((task) => {
        return {
          params: {
            id: task.link.replace("/",""),
          },
        };
      });

     return listOfIds
}

export const getTaskData = (_paramsId: string) => {
    const [task] = tasks
    .filter((_task) => {
      return _paramsId === _task.link.replace("/", "");
    })
  
  const propsData = {
    task: task,
  };

  return propsData
}

export const getAllTasksData = () => {
  return tasks;
}