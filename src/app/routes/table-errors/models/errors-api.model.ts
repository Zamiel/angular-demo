export interface ErrorResponse {
  id: string;
  name: string;
  count: number[];
  priorityId: string;
  statusId: string;
}

export interface ErrorDependencies {
  priorities: Record<string, string>;
  status: Record<string, string>;
}
