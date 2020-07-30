import { ITrending } from '../domain/entity/trending.entity';
import { TrendingKind } from '../common/enum/trending-king.enum';

const now = new Date();

export const Trendings: Array<ITrending> = [
    {
        id: '9cbe5515-1ed9-49cf-9a99-9927dc854b0f',
        aggregateID: 'H70Ou7X1KYOmmtquoXpTT',
        displayName: 'Albert Einstein',
        image: 'https://m.dw.com/image/44213310_101.jpg',
        MassFluctuationRatio: 40.20,
        region: 'us',
        kind: TrendingKind.Author,
        occurTime: now
    },
    {
        id: '2c1f6460-c848-4320-821e-3ffd0c3be26f',
        aggregateID: 'XrtpNzixu8jOHK0kBkRTU',
        displayName: 'Quantum Duderino',
        image: 'https://hollywoodbowles.com/wp-content/uploads/2019/08/5D233C8C-6388-4AB9-97D8-22FC35E06716.jpeg',
        MassFluctuationRatio: 19.80,
        region: 'us',
        kind: TrendingKind.Author,
        occurTime: now
    },
    {
        id: '0eaa708a-8018-4380-a67a-a34feaf3b44b',
        aggregateID: 'lJDKYv1NwGuH2v4OerZdl',
        displayName: 'Statistical Thermodynamics',
        image: 'https://www.amazon.com/images/I/41twAZJ+jmL._SX322_BO1,204,203,200_.jpg',
        MassFluctuationRatio: 12.25,
        region: 'us',
        kind: TrendingKind.Media,
        occurTime: now
    },
    {
        id: '484f809a-e622-454f-b6b1-9fc2f55ec32d',
        aggregateID: 'zqEROBNEPHSvHQElHlZ6A',
        displayName: 'The seven deadly sins explained for dummies',
        image: 'https://i.pinimg.com/736x/75/28/9e/75289e0c2f80400793e8859be5e416b9.jpg',
        MassFluctuationRatio: 12.25,
        region: 'us',
        kind: TrendingKind.Media,
        occurTime: now
    }
];
