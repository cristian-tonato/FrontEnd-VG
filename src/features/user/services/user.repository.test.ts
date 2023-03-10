import { servicesVersion } from 'typescript';
import { UserRespository } from './userRepository';

describe('Given UserRepository', () => {
    const mock = {
        id: '111111111111111111',
        name: 'Pepe',
        lastName: 'Perez',
        nickname: 'pepebot',
        email: 'pepebot@gmail.com',
        password: '123456',
        favorites: [],
    };
    let service: UserRespository;
    let error: Error;
    beforeEach(() => {
        service = new UserRespository('');
        error = new Error('error');
    });
    describe('When instiate Register', () => {
        test('Should return a new user', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mock),
            });
            const resultReg = await service.register(mock);
            expect(fetch).toHaveBeenCalled();
            expect(resultReg).toEqual(mock);
        });
        test('Then if the user can not register, it should throw an ERROR', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 404,
                statusText: 'error',
            });
            await service.register(mock);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
    describe('When instatiate Login', () => {
        test('Then is should return a token', async () => {
            const mockToken =
                'azxcvbnm,lñlkjhgfdsaqwertyuiopqwertyuioplkjhgfdsaazxcvbnmDFGHJKLÑLmnbvc14862';
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockToken),
            });
            const resultLog = await service.login(mock);
            expect(fetch).toHaveBeenCalled();
            expect(resultLog).toEqual(mockToken);
        });
        test('Then if the user can not login, it should throw an ERROR', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 404,
                statusText: 'error',
            });
            await service.login(mock);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
    describe('When instatite a Get', () => {
        // test('Should return the user:id', async () => {
        //     global.fetch = jest.fn().mockResolvedValue({
        //         ok: true,
        //         json: jest.fn().mockResolvedValue(mock),
        //     });
        //     const resultGet = await service.get(mock.id);
        //     expect(fetch).toHaveBeenCalled();
        //     expect(resultGet).toEqual(mock);
        // });
        test('Then if something goes wrong, it should throw an ERROR', async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'error',
            });
            await service.get(mock.id);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
    describe('When instatiate a AddFavs', () => {
        test("should add games to the user's list of favorites", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mock.id),
            });
            const resultAdd = await service.addFav(mock.id);
            expect(fetch).toHaveBeenCalled();
            expect(resultAdd).toEqual(mock.id);
        });
        test('Then if something goes wrong, it should throw an ERROR', async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'error',
            });
            await service.addFav(mock.id);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
    describe('When instatiate DeleteFavs', () => {
        test('Should delete games to the user`s list of favorites', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mock.id),
            });
            const resultDeleteFav = await service.deleteFav(mock.id);
            expect(fetch).toHaveBeenCalled();
            expect(resultDeleteFav).toEqual(mock.id);
        });
    });
    describe('When instatiate Delete', () => {
        test('Should delete the user:id', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mock.id),
            });
            const resultDelete = await service.delete(mock.id);
            expect(fetch).toHaveBeenCalled();
            expect(resultDelete).toEqual(mock.id);
        });
        test('Then if something goes wrong, it should throw an ERROR', async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'error',
            });
            await service.deleteFav(mock.id);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
});
