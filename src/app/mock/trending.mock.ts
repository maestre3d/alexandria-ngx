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
        verified: true,
        occurTime: now
    },
    {
        id: '2c1f6460-c848-4320-821e-3ffd0c3be26f',
        aggregateID: 'iI5R8RDYduL1p31q2tlnt',
        displayName: 'Dross US',
        image: 'https://scontent.fcuu2-1.fna.fbcdn.net/v/t1.0-9/116441095_3393071814065279_3165812578629654859_o.jpg?_nc_cat=1&_nc_sid=09cbfe&_nc_eui2=AeHX6PjYlO40uJ1U7LVu0awoMfsTz4NY7Ucx-xPPg1jtRzvYCmzxNsDjgwKG9r8Eehs&_nc_ohc=5zop1SluEh4AX-7uOZs&_nc_oc=AQlDkF_jQZRZRSdXt1GYoo1EH0NGjB62MXartC-upEwUm7WqFxDMYjIz8T9LxoXklfQ&_nc_ht=scontent.fcuu2-1.fna&oh=26dbb9cd867908988e4aed04e59c7def&oe=5F47758C',
        MassFluctuationRatio: 19.80,
        region: 'us',
        kind: TrendingKind.Author,
        verified: true,
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
