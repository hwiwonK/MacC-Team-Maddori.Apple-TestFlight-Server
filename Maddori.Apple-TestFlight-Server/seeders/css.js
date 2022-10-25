'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('css', [
      {
        from_name: 'Mary',
        to_name: 'Ginger',
        type: 'Continue',
        keyword: '점심',
        content: '점심이 맛있었다',
        start_content: '앞으로도 맛있는 점심'
      },
      {
        from_name: 'Hoya',
        to_name: 'Chemi',
        type: 'Stop',
        keyword: '점심2',
        content: '점심이 맛없었다',
        start_content: '앞으로는 맛있는 점심'
      },
      {
        from_name: '이드',
        to_name: '곰민',
        type: 'Continue',
        keyword: '피드백',
        content: '피드백이 좋았다',
      },
      {
        from_name: '곰민',
        to_name: 'Mary',
        type: 'Stop',
        keyword: '커피'
      },
      {
        from_name: '에이든',
        to_name: '소니',
        type: 'Continue',
        keyword: '건강',
        start_content: '영양제 챙겨먹기'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  }
};