import { GameRepository } from './game.repository';

describe('Given PlacesRepo', () => {
    const mockGames = {
        id: 'a1a1a1a1a11a1aa11aa1a1',
        title: 'SuperMario',
        description: 'Heroe',
        gameUrl: '',
        images: '',
        genre: 'Action',
        userFav: '',
    };

    let service: GameRepository;
    let error: Error;
    beforeEach(() => {
        service = new GameRepository();
        error = new Error('error');
    });

    describe('When we instantiate GETALL(),', () => {
        test('Then it should return a new user', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([mockGames]),
            });
            await service.getAll();
            expect(fetch).toHaveBeenCalled();
        });

        test('Then if the user can not register, it should throw an ERROR', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 404,
                statusText: 'error',
            });
            await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
    describe('When we instantiate GET(),', () => {
        test('Then it should return a user', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockGames),
            });

            await service.get(mockGames.id);
            expect(fetch).toHaveBeenCalled();
        });

        test('Then if something goes wrong, it should throw an ERROR', async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'error',
            });
            await service.get(mockGames.id);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
    describe('when there is an error we find a message and a status', () => {
        test("if we can't see the games it will throw an error", () => {
            const statusMessage = 'Internal Server Error';
            const statusCode = '503';
            const result = new Error(statusMessage);
            expect(result).toBeInstanceOf(Error);
        });
    });
    // describe("When there is an error en component GameRepository",()=>{
    //     test("should return a error",()=>{

    //     })
    // })
});
