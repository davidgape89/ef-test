'use strict';

import {ControlDTO} from './ControlDTO';
import {TelemetryDTO} from './TelemetryDTO';

export interface ResponseMessageDTO {
    control: ControlDTO;
    telemetry: TelemetryDTO;
}
