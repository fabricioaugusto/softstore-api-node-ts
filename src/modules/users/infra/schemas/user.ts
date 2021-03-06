import { Document, Schema, model } from 'mongoose'

export interface IUserModel {
  name: string
  email: string
  password: string
  phone?: string
  lastMessageReadAt: string
  messageInbox?: string
  profileImg?: string
}

export interface IResponseUserModel extends IUserModel {
  _id: string
}

export interface IUserDocument extends IUserModel, Document{}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  profileImg: {
    type: String,
    required: false
  },
  lastMessageReadAt: {
    type: String,
    required: true
  },
  messageInbox: {
    type: Schema.Types.ObjectId,
    ref: 'MessageInbox',
    required: false
  }
}, { timestamps: true })

export default model<IUserDocument>('User', UserSchema)
