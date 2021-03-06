import { IProductModel, IProductResponse } from '@modules/products/infra/schemas/product'

export default interface IProductRepository {
  find(): Promise<IProductResponse[]>
  create(data: IProductModel): Promise<IProductResponse>
  findByCategory (category: string): Promise<IProductResponse[]>
  findById (id: string): Promise<IProductResponse>
  findByName(name: string): Promise<IProductResponse>
  findBySlug (slug: string): Promise<IProductResponse>
  save (product: IProductResponse): Promise<IProductResponse>
  delete (id: string): Promise<boolean>
}
