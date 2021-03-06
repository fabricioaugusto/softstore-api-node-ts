import { Model } from 'mongoose'
import ICustomizedImageGroupRelationRepository from '@modules/customized-image/infra/repositories/protocols/i-customized-image-group-relation-repository'
import CustomizedImageGroupRelation, { ICustomizedImageGroupRelationDocument, ICustomizedImageGroupRelationModel, ICustomizedImageGroupRelationResponse } from '@modules/customized-image/infra/schemas/customized-image-group-relation'

export default class CustomizedImageGroupRelationRepository implements ICustomizedImageGroupRelationRepository {
  private readonly repository: Model<ICustomizedImageGroupRelationDocument>

  constructor () {
    this.repository = CustomizedImageGroupRelation
  }

  async create (data: ICustomizedImageGroupRelationModel): Promise<ICustomizedImageGroupRelationResponse> {
    return await this.repository.create(data)
  }

  async delete (id: string): Promise<boolean> {
    await this.repository.findByIdAndDelete(id)
    return true
  }

  async deleteManyByGroup (groupId: string): Promise<boolean> {
    await this.repository.deleteMany({ group: groupId })
    return true
  }

  async deleteManyByImage (imageId: string): Promise<boolean> {
    await this.repository.deleteMany({ image: imageId })
    return true
  }

  async find (): Promise<ICustomizedImageGroupRelationResponse[]> {
    return this.repository.find()
  }

  async findById (id: string): Promise<ICustomizedImageGroupRelationResponse> {
    return this.repository.findById(id)
  }

  async findByGroup (groupId: string): Promise<ICustomizedImageGroupRelationResponse[]> {
    return this.repository.find({ group: groupId })
  }

  async save (data: ICustomizedImageGroupRelationResponse): Promise<ICustomizedImageGroupRelationResponse> {
    return this.repository.updateOne({ _id: data._id },{ $set: { ...data } })
  }
}
