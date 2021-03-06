import { Router } from 'express'
import usersRouter from '@modules/users/routes/users.routers'
import administratorAuthRouter from '@modules/administrators/routes/auth.routers'
import administratorRouter from '@modules/administrators/routes/administrators.routers'
import authRouter from '@modules/users/routes/auth.routers'
import passwordRouter from '@modules/users/routes/password.routers'
import profileRouter from '@modules/users/routes/profile.routers'
import categoryRouter from '@modules/products/routes/category.routes'
import productRouter from '@modules/products/routes/product.routes'
import cartItemRouter from '@modules/cart-items/routes/cart.routes'
import settingsRouter from '@modules/settings/routes/settings.routes'
import messageRouter from '@modules/messages/routes/message.routes'
import messageInboxRouter from '@modules/messages/routes/message-inbox.routes'
import postCategoryRouter from '@modules/posts/routes/post-category.routes'
import postRouter from '@modules/posts/routes/post.routes'
import colorRouter from '@modules/products/routes/color.routes'
import productSpecificationRouter from '@modules/products/routes/product-specification.routes'
import productPhotoRouter from '@modules/products/routes/product-photo.routes'
import customizedImageRouter from '@modules/customized-image/routes/customized-image.routes'
import customizedImageGroupRouter from '@modules/customized-image/routes/customized-image-group.routes'
import customizedImageGroupRelationRouter
  from '@modules/customized-image/routes/customized-image-group-relation.routes'
import categoryRelationshipRouter from '@modules/products/routes/category-relationship.routes'
import productCustomizedTextRouter from '@modules/products/routes/product-customized-text.routes'
import productCategoryRouter from '@modules/products/routes/product-category.routes'
import productCustomizedImageGroupRelationRouter
  from '@modules/products/routes/product-customized-image-group-relation.routes'
import appDataRouter from '@modules/app-data/routes/app-data.routes'

const routes = Router()

routes.use('/administrator', administratorAuthRouter)
routes.use('/administrator', administratorRouter)
routes.use('/auth', authRouter)
routes.use('/user', usersRouter)
routes.use('/profile', profileRouter)
routes.use('/category', categoryRouter)
routes.use('/category-relationship', categoryRelationshipRouter)
routes.use('/product', productRouter)
routes.use('/product-specification', productSpecificationRouter)
routes.use('/product-category', productCategoryRouter)
routes.use('/product-photo', productPhotoRouter)
routes.use('/product-customized-image', productCustomizedImageGroupRelationRouter)
routes.use('/customized-image', customizedImageRouter)
routes.use('/customized-text', productCustomizedTextRouter)
routes.use('/customized-image-group', customizedImageGroupRouter)
routes.use('/customized-image-group-relation', customizedImageGroupRelationRouter)
routes.use('/color', colorRouter)
routes.use('/post-category', postCategoryRouter)
routes.use('/post', postRouter)
routes.use('/message', messageRouter)
routes.use('/message-inbox', messageInboxRouter)
routes.use('/password', passwordRouter)
routes.use('/options', settingsRouter)
routes.use('/app-data', appDataRouter)
routes.use('/cart-item', cartItemRouter)

export default routes
