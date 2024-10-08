import * as core from '@actions/core';
import { checkLicenses } from '../../../scripts/check-licenses';

async function run() {
    try {
      await checkLicenses();
    } catch (error) {
      if (error instanceof Error) core.setFailed(error.message);
    }
  }
  
  run();