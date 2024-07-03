export interface Message {
  id: number,
  SenderId: string,
  ReceiverId: string,
  room: string,
  content: string,
  createdAt: Date,
}