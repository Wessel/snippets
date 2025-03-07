#pragma once

#include <string>

// Prefixes log messages
const std::string prefix_div = "[ ===== ] ";
const std::string prefix_dbg = "[ \033[35mDEBUG\033[0m ] ";
const std::string prefix_err = "[ \033[31mERROR\033[0m ] ";
const std::string prefix_ok  = "[ \033[32m   OK\033[0m ] ";

// Debug log macro only logs on `DEBUG` builds
#ifndef NDEBUG
#define DBG(msg) std::cerr << \
  std::setw(12) << std::left << prefix_dbg << (__FILE__ + std::string(__FILE__).find_last_of("/\\") + 1) \
  << ":" << std::setw(4) << std::setfill('_') << std::left << std::setw(4) << std::internal \
  << std::setfill('_') << __LINE__ << ":" << std::setw(5) << std::left << __func__ << \
  " -- " << msg << std::endl
#else
#define DBG(msg)
#define DBG_CLASS(obj)
#endif
