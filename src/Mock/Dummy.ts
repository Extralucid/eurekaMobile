import moment from 'moment';
import uuid from 'react-native-uuid';

/**
 * Define and export the dummy data.
 */
export const SendMoneyRecords = [
    {
        id: uuid.v4(),
        img: require('@assets/images/plus.png'),
    },
    {
        id: uuid.v4(),
        avatar: require('@assets/images/avatar2.png'),
        name: 'Mike',
    },
    {
        id: uuid.v4(),
        avatar: require('@assets/images/avatar3.png'),
        name: 'Joshpeh',
    },
    {
        id: uuid.v4(),
        avatar: require('@assets/images/avatar4.png'),
        name: 'Ashley',
    },
    {
        id: uuid.v4(),
        avatar: require('@assets/images/avatar4.png'),
        name: 'xxxxx',
    },
];



export const Services = [
    {
        id: uuid.v4(),
        img: 'id-card-o',
        name: 'Mes Polices',
    },
    {
        id: uuid.v4(),
        img: 'envelope',
        name: 'Mes Avenants',
    },
    {
        id: uuid.v4(),
        img: 'truck',
        name: 'Mes Vehicules',
    },
    {
        id: uuid.v4(),
        img: 'exclamation-triangle',
        name: 'Mes Sinistres',
    },

    {
        id: uuid.v4(),
        img: 'map-o',
        name: 'Nos agences',
    },
    {
        id: uuid.v4(),
        img: 'th',
        name: 'Mes Paiements',
    },
    {
        id: uuid.v4(),
        img: 'ticket',
        name: 'Mes Reclamations',
    },
    {
        id: uuid.v4(),
        img: 'braille',
        name: 'Plus Options',
    },
];

const dummyData = { SendMoneyRecords, Services };

export default dummyData;
