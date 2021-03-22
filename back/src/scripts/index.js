/*
 * 일괄 처리 스크립트 관리 모듈
 */

import { stringToDate } from '../modules/date';
import batch from './batch_crawl';
import readlineSync from 'readline-sync';
import logger from '../modules/winston';

const modules = {
  batch: {
    desc: 'Batch crawl module',
    exec: () => {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const date = {
        startDate: null,
        endDate: null,
      };

      date.startDate = readlineSync.question('Enter the start date : ');
      date.endDate = readlineSync.question('Enter the end date : ');

      const dateValue = {
        start: stringToDate(date.startDate),
        end: stringToDate(date.endDate),
      };

      if (
        dateValue.start > dateValue.end ||
        dateValue.start === null ||
        dateValue.end === null
      ) {
        console.log('E: Invalid format');
      } else if (dateValue.start >= today || dateValue.end >= today) {
        console.log('E: Future review information cannot be crawled.');
      } else {
        batch(date.startDate, date.endDate);
      }
    },
  },
};

// executable
(() => {
  logger.info('Batch: init');
  console.log('Batch operation program');
  console.log('-------- Modules list --------');

  Object.keys(modules).map((key) => {
    console.log(`${key}: ${modules[key].desc}`);
  });

  const input = readlineSync.question('\nPlease enter a module name to run : ');
  if (input in modules) {
    logger.info(`Batch: ${modules[input].desc} started.\n`);
    modules[input].exec();
  } else {
    logger.error(
      `Batch: No corresponding batch module found. module: ${input}`,
    );
  }
})();
