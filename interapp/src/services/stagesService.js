export const stages = [
    {id: 1, stage: "Applied"},
    {id: 2, stage: "Online Assessment"},
    {id: 3, stage: "Interview"},
    {id: 4, stage: "Follow Up"},
    {id: 5, stage: "Offer"},
    {id: 6, stage: "Accepted"},
    {id: 7, stage: "Rejected"},
];

export function getStages() {
    return stages.filter(s => s);
}