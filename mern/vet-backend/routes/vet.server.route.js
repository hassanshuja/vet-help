// ./express-server/routes/todo.server.route.js
import express from 'express';
//import controller file
import passport from 'passport';
// import * as todoController from '../controllers/vet.server.controller';
import * as UserController from '../controllers/user';
import * as PetController from '../controllers/petController';
// get an instance of express router

const router = express.Router();
// router.route('/')
//      .get(todoController.getTodos)
//      .post(todoController.addTodo)
//      .put(todoController.updateTodo);
// router.route('/:id')
//       .get(todoController.getTodo)
//       .delete(todoController.deleteTodo);
router.route('/register').post(UserController.register);
router.route('/login').post(UserController.login);
router.route('/me').get(passport.authenticate('jwt', { session: false }), UserController.me);
router.route('/createpet').post(PetController.create);
router.route('/pets').get(PetController.allPets);
export default router;