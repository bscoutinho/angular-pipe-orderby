import { OrderByPipe } from "./orderby.pipe";

describe('TitleCasePipe', () => {
    const pipe = new OrderByPipe();

    const data = [
        { turbine_name: 'Baynne ', wind_park: 'Bayone' },
        { turbine_name: 'Salstiegl ', wind_park: 'Salzst' },
        { turbine_name: 'Chradurga - SLL2', wind_park: 'Chiarga' },
        { turbine_name: 'Moilishte ', wind_park: 'Mogihte' },
        { turbine_name: 'Mogshte ', wind_park: 'Mogshte' },
    ];

    const result = [
        { turbine_name: 'Baynne ', wind_park: 'Bayone' },
        { turbine_name: 'Chradurga - SLL2', wind_park: 'Chiarga' },
        { turbine_name: 'Moilishte ', wind_park: 'Mogihte' },
        { turbine_name: 'Mogshte ', wind_park: 'Mogshte' },
        { turbine_name: 'Salstiegl ', wind_park: 'Salzst' },
    ]
  
    it('Order by list alphabetically ascending', () => {
      expect(pipe.transform(data, 'wind_park', 'asc')).toEqual(result);
    });
  
});