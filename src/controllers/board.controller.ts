import Board, {IBoard, ICard, IList} from "../models/Board"

class BoardController {
  static getBoard = async (id: string): Promise<IBoard | null> => await Board.findById(id)
  static getAllBoards = async (userId: string): Promise<IBoard[] | null> => await Board.find({creator:userId})
  static createBoard = async (data: IBoard): Promise<IBoard> => await Board.create({...data})
  static changeBoard = async (data: IBoard): Promise<IBoard | null> => await Board.findByIdAndUpdate(data._id, {...data})
  static deleteBoard = async (id: string): Promise<IBoard | null> => await Board.findByIdAndDelete(id)

  static getList = async (boardId: string, listId: string): Promise<IBoard | null> =>
    await Board.findOne({_id: boardId, "lists._id": listId})

  static createList = async (boardId: string, data: IList): Promise<IBoard> =>
    await Board.update({_id: boardId}, {$push: {lists: data}})

  static changeList = async (boardId: string, data: IList): Promise<IBoard | null> =>
    await Board.update({_id: boardId, "lists._id": data._id}, {$set: {"lists.$": data}})

  static deleteList = async (boardId: string, listId: string): Promise<IBoard | null> =>
    await Board.update({_id: boardId}, {$pull: {lists: listId}})

  static getCard = async (boardId: string, cardId: string): Promise<IBoard | null> =>
    await Board.findOne({_id: boardId, "lists.cards._id": cardId})

  static createCard = async (boardId: string, data: ICard): Promise<IBoard> =>
    await Board.update({_id: boardId, "lists.cards._id": data._id}, {$push: {"lists.cards": data}})

  static changeCard = async (boardId: string, data: ICard): Promise<IBoard | null> =>
    await Board.update({_id: boardId, "lists.cards._id": data._id}, {$set: {"lists.cards.$": data}})

  static deleteCard = async (boardId: string, cardId: string): Promise<IBoard | null> =>
    await Board.update({_id: boardId, "lists.cards._id": cardId}, {$pull: {"lists.cards.$": cardId}})
}

export default BoardController
