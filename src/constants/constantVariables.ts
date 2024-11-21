// Error Constants
export const TIME_INTERVAL_ERROR = 'Time interval must be in 15-minute increments.'
export const TIME_ORDER_ERROR = 'End time must be later than start time.'
export const OVERLAP_ERROR = 'This time entry conflicts with another entry.'
export const DATE_OUT_OF_ALLOWED_RANGE_ERROR = 'The selected date falls outside the allowed range.'
export const EDITING_PAST_EVENTS_ERROR =
  'Events in the past cannot be edited. You can only edit upcoming events within the allowed date range'
export const MISSING_PROJECT_ERROR = 'Please select a project'
export const MAXIMUM_TIME_WARNING =
  'Are you sure you want to register an entry with more than 8 hours?'

// Date formats
export const dateFormat = 'YYYY-MM-DD'
export const dateFormatForDisplay = 'YYYY MMM DD'

// Colors constants
export const blackColor = '#00000'
export const lightGrayColor = '#f1f1f1'
export const sickLeaveColor = '#FF6347'
export const pendingVacationColor = '#FFAF00'

// Expected Errors from the backend
export enum ExpectedErrors {
  ValidationError = 'ValidationError',
  NotFoundError = 'NotFoundError',
  ConflictError = 'ConflictError',
  ForbiddenError = 'ForbiddenError',
}

// Utilization Rate colors
export const betterUtilizationRateColor = '#02c466'
export const goodUtilizationRateColor = '#f9e400'
export const fairUtilizationRateColor = '#ffb200'
export const badUtilizationRateColor = '#ff0000'

// default color for events without a color code
export const defaultEventColor = '#dcdcdc'
