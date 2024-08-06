export const TIME_OUT_API = 60000;
export const TIME_OUT_IMPORT = 60000;
export const WAITING_SUBMIT_TIME_OUT = 1000;
export const DEFAULT_MAX_LENGTH = 256;
export const PASSWORD_MAX_LENGTH = 128;
export const DEFAULT_MIN_LENGTH = 1;
export const TOKEN = "token";
export const REGEX_SPACE = /^\S+$/;
export const REGEX_TEL = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
export const REGEX_POSITIVE_INTERGER = /^[1-9]\d*$/;
export const REGEX_POSITIVE_INTERGER_HAS_ZERO = /^[0-9]\d*$/;
export const TABS = [
  {
    title: "listBehavior",
    alias: "DSHV",
  },
  {
    title: "capacitySign",
    alias: "DC",
  },
];

export const CLIENT_TYPE_LOGIN = 2;

export const TRAINING_PLAN_STATUS = {
  draft: 1,
  calculating: 2,
  completed: 3,
  deleted: 4,
  calculatingFail: 5,
}
export const TRAINING_PLAN_STATUS_COLOR = {
  1: "#00000040",
  2: "#06F",
  3: "#31C340",
  4: "#000000e0",
  5: "#F5222D",
}
export const ROI_TYPE = {
  trainingPlan: "TRAINING_PLAN",
  course: "COURSE"
}
export const ROI_METHOD = {
  revenue: "REVENUE",
  work: "WORK"
}
export const ASSESSMENT_TYPE = {
  type1: 1,
  type2: 2,
  type3: 3
};
export const RATING_TYPE = {
  ASSESSMENT: 'assessment',
  EXAMINATION: 'examination',
}
export const CAPACITY_FRAMEWORK_STATUS_COLOR = {
  0: "#00000040",
  1: "#31C340"
}

export const COURSE_STATUS_ENUM = {
  DRAFT: "draft",
  IMPORTING: "importing",
  IMPORT_ERROR: "import_error",
  CLONING: "cloning",
  CLONE_ERROR: "clone_error",
  PUBLISHED: "published",
  PUBLISHING: "publishing",
}

export const TYPE_CAPACITY = {
  INSIDE: "in_system",
  OUTSIDE: "outside_system",
};

export const URL_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

export const IDP_STATUS_ENUM = {
  DRAFT: "draft",
  WAITING: "waiting_approval",
  REJECT: "reject",
  IMPLEMENTING: "implementing",
  DONE: "done",
}

export const ROLE_ADMIN = [
  'dashboard:personnel_rate_by_capacity_group',
  'dashboard:average_score_by_department',
  'dashboard:recent_evaluation',
  'dashboard:personnel_rate_by_department',
  'dashboard:average_score_by_position',
  'dashboard:personnel_rate_by_capacity_group:department',
  'dashboard:average_score_by_department:department',
  'dashboard:recent_evaluation:department',
  'dashboard:personnel_rate_by_department:department',
  'dashboard:average_score_by_position:department'
]

export const PERMISSION = {
  VIEW_EVALUTION: "execute:view_evaluation_period",
  CREATE_EVALUTION: "execute:create_update_evaluation",
  ADD_PERSON_EVALUTION: "execute:add_evaluator",
  DELETE_EVALUTION: "execute:delete_evaluation",
  PERFORM_EVALUTION: "execute:perform_evaluation",
  VIEW_EVALUATION_NEED_APPROVAL: "execute:view_evaluation_need_approval",
  VIEW_EVALUATION_DETAIL: "execute:view_evaluation_details",
  PUBLISH_EVALUATION: "execute:publish_evaluation",
  CREATE_TEST_APPROVAL: "execute:create_test_approval",
  APPROVE_EVALUATION: "execute:approve_evaluation",
  VIEW_TEST_PERIOD: "test:view_test_period",
  DELETE_TEST_PERIOD: "test:delete_test_period",
  CREATE_TEST_EXAM: "test:create_test_exam",
  VIEW_TEST_DETAILS: "test:view_test_details",
  PERFORM_TEST: "test:perform_test",
  ROI_VIEW_RETURN_ON_INVESTMENT: "roi:view_return_on_investment",
  ROI_CREATE_UPDATE_ROI_PROGRAM: "roi:create_update_roi_program",
  SCHEDULE_TRAINING_VIEW_PLAN: "schedule_training:view_plan",
  SCHEDULE_TRAINING_CREATE_PLAN: "schedule_training:create_plan",
  SCHEDULE_TRAINING_UPDATE_PLAN: "schedule_training:update_plan",
  SCHEDULE_TRAINING_APPLY_PLAN: "schedule_training:apply_plan",
  SCHEDULE_TRAINING_VIEW_SCHEDULE: "schedule_training:view_schedule",
}

export const LEARNING_PATH = {
  APPROVE_MANAGER: "learning_path:approve_manager",
  CREATE_IDP: "learning_path:create_idp",
  VIEW_IDP: "learning_path:view_idp",
  APPROVE_IDP: "learning_path:approve_idp",
  VIEW_MENTOR: "learning_path:view_mentor",
}

export const PERMISSION_KPI = {
  KPI_VIEW: "kpi:view",
  KPI_CREATE: "kpi:create",
  KPI_UPDATE: "kpi:update",
  KPI_DELETE: "kpi:delete",
}

export const PERMISSION_USER_MANAGEMENT = {
  HR_VIEW:'hr_management:view',
  HR_CREATE:'hr_management:create',
  HR_UPDATE:'hr_management:update',
  HR_DELETE:'hr_management:delete',
  HR_IMPORT_EXCEL:'hr_management:import_excel',
  HR_UPDATE_PASS:'hr_management:update_password',
}

export const PERMISSION_COURSE_MATRIX = {
  COURSE_MATRIX: 'course_matrix:configure',
}

export const PERMISSION_POSITION_MANAGEMENT = {
  POSITION_VIEW:'position_management:view_position',
  POSITION_CREATE:'position_management:create_position',
  POSITION_UPDATE:'position_management:update_position',
  POSITION_DELETE:'position_management:delete_position',
  POSITION_IMPORT_EXCEL:'position_management:import_excel_position',
}

export const PERMISSION_POSITION_WORK = {
  POSITION_VIEW:'position_management:view',
  POSITION_CREATE:'position_management:create',
  POSITION_UPDATE:'position_management:edit',
  POSITION_DELETE:'position_management:delete',
  POSITION_IMPORT_EXCEL:'position_management:import_excel',
}

export const PERMISSION_DEPARTMENT = {
  DEPARTMENT_VIEW:'department_management:view',
  DEPARTMENT_CREATE:'department_management:create',
  DEPARTMENT_UPDATE:'department_management:edit',
  DEPARTMENT_DELETE:'department_management:delete',
}
export const PERMISSION_ORGANIZATION = {
  VIEW:'organization_chart:view',
  VIEW_DEPART:'organization_chart:view:department',
  CREATE:'organization_chart:add_department',
  UPDATE:'organization_chart:edit_department',
  DELETE:'organization_chart:delete_department',
  IMPORT_EXCEL:'organization_chart:import_excel',
}
export const PERMISSION_ROLE = {
  VIEW:'system_role:view',
  CREATE:'system_role:create',
  UPDATE:'system_role:update',
  DELETE:'system_role:delete',
}
export const PERMISSION_NL = {
  VIEW:'capacity:view',
  CREATE:'capacity:add',
  UPDATE:'capacity:edit',
  DELETE:'capacity:delete',
  IMPORT_EXCEL:'capacity:import_excel',
  CREATE_GROUP:'capacity:add_group',
  UPDATE_GROUP:'capacity:edit_group',
  DELETE_GROUP:'capacity:delete_group',
}
export const PERMISSION_KNL = {
  VIEW:'capacity_frame:view',
  CREATE:'capacity_frame:create',
  UPDATE:'capacity_frame:update',
  DELETE:'capacity_frame:delete',
  IMPORT_EXCEL:'capacity_frame:import_excel',
}
export const PERMISSION_SCORE = {
  VIEW:'scale:view',
  CREATE:'scale:create',
  UPDATE:'scale:update',
  DELETE:'scale:delete',
}

export const PERMISSION_COURSE_LIST = {
  VIEW: 'course_list:view',
  CREATE: 'course_list:add',
  UPDATE: 'course_list:update',
  DELETE: 'course_list:delete',
  FOLDER_COURSE_ADD: 'course_list_folder:add',
  FOLDER_COURSE_UPDATE: 'course_list_folder:update',
  FOLDER_COURSE_DELETE: 'course_list_folder:delete',
}

export const PERMISSION_QUESTION = {
  VIEW:'test_question:view',
  CREATE:'test_question:add',
  UPDATE:'test_question:update',
  DELETE:'test_question:delete',
  CREATE_Q_FOLDER:'test_question_folder:add',
  UPDATE_Q_FOLDER:'test_question_folder:update',
  DELETE_Q_FOLDER:'test_question_folder:delete',
  MAP_QUESTION:'question_mapping',
}

export const PERMISSION_REPORT_RESULT= {
  VIEW:'report:view_evaluation_result',
  EXPORT_FILE:'report:export_evaluation_pdf',
  VIEW_DETAIL:'report:view_evaluation_detail',
  CONFIG:'report:configure_evaluation_ranking',
}

export const PERMISSION_REPORT_PERSONAL = {
  VIEW_MY_RESULT:'report:view_my_result',
  VIEW_MY_EVALUATION:'report:view_my_evaluation',
  VIEW_COMPARISON:'report:view_comparison_report',
  VIEW_TRAINING:'report:view_training_report',
  VIEW_TALENT:'report:view_talent_report',
  VIEW_PROJECT:'report:view_project_report',
  CREATE_PROJECT:'report:create_project_report',
  DELETE_PROJECT:'report:delete_project_report',
  VIEW_RATE:'report:view_consensus_rate_report',
  VIEW_DEVELOPMENT:'report:view_development_path_report',
  VIEW_9_BOX:'report:view_9_box_report',
  UPDATE_9_BOX:'report:update_kpi_9_box_report',
}

export const PERMISSION_REPORT_RESULT_DEPART= {
  VIEW:'report:view_evaluation_result:department',
  EXPORT_FILE:'report:export_evaluation_pdf:department',
  VIEW_DETAIL:'report:view_evaluation_detail:department',
  CONFIG:'report:configure_evaluation_ranking:department',
}

export const PERMISSION_REPORT_PERSONAL_DEPART = {
  VIEW_MY_RESULT:'report:view_my_result:department',
  VIEW_MY_EVALUATION:'report:view_my_evaluation:department',
  VIEW_COMPARISON:'report:view_comparison_report:department',
  VIEW_TRAINING:'report:view_training_report:department',
  VIEW_TALENT:'report:view_talent_report:department',
  VIEW_PROJECT:'report:view_project_report:department',
  CREATE_PROJECT:'report:create_project_report:department',
  DELETE_PROJECT:'report:delete_project_report:department',
  VIEW_RATE:'report:view_consensus_rate_report:department',
  VIEW_DEVELOPMENT:'report:view_development_path_report:department',
  VIEW_9_BOX:'report:view_9_box_report:department',
  UPDATE_9_BOX:'report:update_kpi_9_box_report:department',
}

export const PERMISSION_REPORT_TEST = {
  VIEW_RESULT:'report_test:view_test_result',
  VIEW_CANDIDATE:'report_test:statistics_candidate',
  TRAINING:'report_test:training',
  VIEW_RESULT_DEPART:'report_test:view_test_result:department',
  VIEW_CANDIDATE_DEPART:'report_test:statistics_candidate:department',
  TRAINING_DEPART:'report_test:training:department',
}

export const PERMISSION_DASHBOARD = {
  RATE_DEPARTMENT:'dashboard:personnel_rate_by_department',
  AVERAGE_SCORE:'dashboard:average_score_by_department',
  AVERAGE_SCORE_GROUP:'dashboard:average_score_by_capacity_group',
}
